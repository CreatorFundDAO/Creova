import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Box, Heading, Text, Container, SimpleGrid, Flex, Badge, Button, Stack, Progress, useToast } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { getFundingPoolContract } from "../utils/FundingPool";
import Footer from "../components/Footer";

const CONTRACT_ADDRESS = "0x3Cd4b170441aFEE9E8f4CA8080e60D488F076913";

export default function Dashboard() {
    const { address, isConnected } = useAccount();
    const [walletBalance, setWalletBalance] = useState("0.0");
    const [daoTreasuryBalance, setDaoTreasuryBalance] = useState("0.0");
    const [projects, setProjects] = useState([]);
    const [contract, setContract] = useState(null);
    const toast = useToast();

    useEffect(() => {
        const fetchDashboardData = async () => {
            if (window.ethereum && isConnected && address) {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const fundingPoolContract = getFundingPoolContract(signer, CONTRACT_ADDRESS);
                setContract(fundingPoolContract);

                const balance = await provider.getBalance(address);
                setWalletBalance(ethers.formatEther(balance));

                const daoTreasuryAddress = await fundingPoolContract.getDaoTreasury();
                const daoBalance = await provider.getBalance(daoTreasuryAddress);
                setDaoTreasuryBalance(ethers.formatEther(daoBalance));

                const campaignCount = await fundingPoolContract.campaignIds();
                const loadedProjects = [];

                for (let i = 1; i <= campaignCount; i++) {
                    const campaign = await fundingPoolContract.campaigns(i);
                    const milestones = await fundingPoolContract.getMilestones(i);
                    const votes = await fundingPoolContract.campaignVotes(i);

                    loadedProjects.push({
                        id: i,
                        name: campaign.name, // ✅ fixed clearly
                        status: ["Pending", "Approved", "Rejected"][campaign.status],
                        votes: Number(votes),
                        milestones: milestones.map(m => ({
                            title: m.description,
                            completed: m.completed,
                            amount: ethers.formatEther(m.amount)
                        }))
                    });
                }

                setProjects(loadedProjects);
            }
        };

        fetchDashboardData();
    }, [isConnected, address]);

    const getStatusBadge = (status) => {
        switch (status) {
            case "Approved": return <Badge colorScheme="green">Approved</Badge>;
            case "Pending": return <Badge colorScheme="yellow">Pending</Badge>;
            case "Rejected": return <Badge colorScheme="red">Rejected</Badge>;
            default: return <Badge>Unknown</Badge>;
        }
    };

    const handleVote = async (campaignId) => {
        if (!contract) return;

        try {
            const tx = await contract.voteOnCampaign(campaignId);
            await tx.wait();

            toast({
                title: "Vote submitted!",
                description: "Your vote has been recorded on-chain.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            console.error(error);
            toast({
                title: "Error submitting vote",
                description: error.reason || error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Box minH="100vh" bgGradient="linear(to-br, #14B8A6, #ffffff)" py={20} pt={28}>
                <Container maxW="container.xl">
                    <Heading size="2xl" textAlign="center" mb={10}>User Dashboard</Heading>

                    <SimpleGrid columns={[1, 2]} spacing={8} mb={12}>
                        <Box bg="white" p={6} rounded="xl" boxShadow="xl">
                            <Text fontWeight="bold" fontSize="lg">Your Wallet Balance</Text>
                            <Text fontSize="2xl" color="teal.600">{walletBalance} ETH</Text>
                        </Box>
                        <Box bg="white" p={6} rounded="xl" boxShadow="xl">
                            <Text fontWeight="bold" fontSize="lg">DAO Treasury Balance</Text>
                            <Text fontSize="2xl" color="teal.600">{daoTreasuryBalance} ETH</Text>
                        </Box>
                    </SimpleGrid>

                    <Heading size="xl" mb={6}>Active Projects</Heading>
                    <SimpleGrid columns={[1, 2]} spacing={8}>
                        {projects.map(project => (
                            <Box key={project.id} bg="white" p={6} rounded="xl" boxShadow="md">
                                <Flex justify="space-between" align="center" mb={2}>
                                    <Heading size="md">{project.name}</Heading>
                                    {getStatusBadge(project.status)}
                                </Flex>
                                <Text fontSize="sm" mb={2}>Votes: <strong>{project.votes}</strong></Text>

                                <Stack spacing={3}>
                                    {project.milestones.map((m, i) => (
                                        <Box key={i}>
                                            <Flex justify="space-between">
                                                <Text fontSize="sm">{m.title}</Text>
                                                <Text fontSize="sm">{m.amount} ETH</Text>
                                            </Flex>
                                            <Progress
                                                value={m.completed ? 100 : 20}
                                                colorScheme={m.completed ? "green" : "teal"}
                                                size="sm"
                                            />
                                        </Box>
                                    ))}
                                </Stack>

                                <Button mt={4} colorScheme="teal" onClick={() => handleVote(project.id)}>
                                    Vote on Project
                                </Button>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
            <Footer />
        </>
    );
}