import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Container, Heading, Text, VStack, Button, Box, Spinner, Tooltip, useToast } from "@chakra-ui/react";
import { getFundingPoolContract } from "../utils/FundingPool";
import { useAccount } from "wagmi";
import { motion } from "framer-motion";
import Footer from '../components/Footer';

const CONTRACT_ADDRESS = "0x3Cd4b170441aFEE9E8f4CA8080e60D488F076913";
const MotionBox = motion(Box);

const FundingPoolPage = () => {
    const [contractAddress, setContractAddress] = useState(CONTRACT_ADDRESS);
    const [daoTreasury, setDaoTreasury] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [loading, setLoading] = useState(true);

    const { address, isConnected } = useAccount();
    const toast = useToast();

    const fetchContractDetails = async () => {
        if (window.ethereum && isConnected) {
            setLoading(true);
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const contract = getFundingPoolContract(signer, CONTRACT_ADDRESS);

                const treasuryAddress = await contract.getDaoTreasury();

                setDaoTreasury(treasuryAddress);
                setWalletAddress(address);
            } catch (error) {
                console.error("Error fetching details:", error);
                toast({
                    title: "Error fetching details",
                    description: error.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            } finally {
                setLoading(false);
            }
        } else {
            setDaoTreasury("Wallet not connected");
            setWalletAddress("Wallet not connected");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContractDetails();
    }, [isConnected, address]);

    return (
        <Container maxW="container.md" py={20}>
            <MotionBox
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                bg="white"
                p={10}
                boxShadow="2xl"
                borderRadius="2xl"
            >
                <VStack spacing={5}>
                    <Heading size="xl" mb={4}>Funding Pool Contract</Heading>

                    <Text fontWeight="semibold">Contract Address:</Text>
                    <Tooltip label="Click to copy" hasArrow>
                        <Text
                            color="teal.500"
                            cursor="pointer"
                            onClick={() => navigator.clipboard.writeText(contractAddress)}
                        >
                            {contractAddress}
                        </Text>
                    </Tooltip>

                    <Text fontWeight="semibold">DAO Treasury Address:</Text>
                    {loading ? <Spinner color="teal.500" /> : (
                        <Tooltip label="Click to copy" hasArrow>
                            <Text
                                color="teal.500"
                                cursor="pointer"
                                onClick={() => navigator.clipboard.writeText(daoTreasury)}
                            >
                                {daoTreasury}
                            </Text>
                        </Tooltip>
                    )}

                    <Text fontWeight="semibold">Your Wallet Address:</Text>
                    {loading ? <Spinner color="teal.500" /> : (
                        <Tooltip label="Click to copy" hasArrow>
                            <Text
                                color="teal.500"
                                cursor="pointer"
                                onClick={() => navigator.clipboard.writeText(walletAddress)}
                            >
                                {walletAddress}
                            </Text>
                        </Tooltip>
                    )}

                    <Button
                        onClick={fetchContractDetails}
                        colorScheme="teal"
                        size="lg"
                        px={8}
                        boxShadow="md"
                        _hover={{ boxShadow: "xl", transform: "translateY(-2px)" }}
                        isLoading={loading}
                    >
                        Refresh Details
                    </Button>
                </VStack>
            </MotionBox>
        </Container>
    );
};

export default FundingPoolPage;