import { Box, Heading, Text, Container, VStack, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getFundingPoolContract } from "../lib/getFundingPoolContract";
import { useAccount } from "wagmi";
import Footer from '../components/Footer';

const CONTRACT_ADDRESS = "0x3Cd4b170441aFEE9E8f4CA8080e60D488F076913";
export default function TransparencyDashboard() {
    const { isConnected } = useAccount();
    const [daoTreasuryBalance, setDaoTreasuryBalance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDaoTreasuryBalance() {
            if (isConnected && typeof window.ethereum !== 'undefined') {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const contract = getFundingPoolContract(provider, CONTRACT_ADDRESS);
                const daoTreasuryAddress = await contract.daoTreasury();
                const balanceWei = await provider.getBalance(daoTreasuryAddress);
                setDaoTreasuryBalance(ethers.formatEther(balanceWei));
                setLoading(false);
            } else {
                setLoading(false);
            }
        }

        fetchDaoTreasuryBalance();
    }, [isConnected]);

    return (
        <>
            <Box minH="100vh" bgGradient="linear(to-br, #14B8A6, #ffffff)" py={20} pt={28}>
                <Container maxW="container.lg" textAlign="center" mb={16}>
                    <Heading as="h1" size="2xl" fontWeight="bold" color="gray.900">
                        Transparency Dashboard
                    </Heading>
                    <Text fontSize="lg" color="gray.700" mt={4} maxW="800px" mx="auto">
                        Real-time tracking of all Creova funding activities.
                    </Text>
                </Container>

                <Container maxW="container.md" py={16}>
                    <VStack p={8} borderRadius="2xl" bg="white" boxShadow="2xl" spacing={5}>
                        <Heading as="h2" size="lg" color="gray.900">DAO Treasury Balance</Heading>
                        {loading ? (
                            <Spinner size="xl" color="teal.500" />
                        ) : (
                            <Text fontSize="3xl" fontWeight="bold" color="teal.500">
                                {daoTreasuryBalance ? `${daoTreasuryBalance} ETH` : "Data unavailable"}
                            </Text>
                        )}
                    </VStack>
                </Container>
            </Box>

            <Footer />
        </>
    );
}
