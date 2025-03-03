import { useState } from "react";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { getFundingPoolContract } from "../utils/FundingPool";
import { Box, Container, Heading, Input, Button, VStack, useToast } from "@chakra-ui/react";
import Footer from "../components/Footer";

const CONTRACT_ADDRESS = "0x3Cd4b170441aFEE9E8f4CA8080e60D488F076913";
export default function AdminPage() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const { isConnected } = useAccount();
  const toast = useToast();

  const handleAddVoter = async () => {
    if (!window.ethereum || !isConnected) return;

    setLoading(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getFundingPoolContract(signer, CONTRACT_ADDRESS);

      const tx = await contract.addVoter(address);
      await tx.wait();

      toast({ title: "Voter Added Successfully!", status: "success" });
    } catch (error) {
      toast({ title: "Error adding voter", description: error.message, status: "error" });
    }
    setLoading(false);
  };

  return (
    <>
      <Container maxW="container.md" py={24}>
        <Box p={8} bg="white" rounded="xl" boxShadow="xl">
          <VStack spacing={4}>
            <Heading size="lg">Admin: Manage Voters</Heading>
            <Input placeholder="Voter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <Button colorScheme="teal" isLoading={loading} onClick={handleAddVoter}>
              Add Voter
            </Button>
          </VStack>
        </Box>
      </Container>
      <Footer />
    </>
  );
}