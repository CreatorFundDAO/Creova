import { useState } from "react";
import { ethers } from "ethers";
import { Box, Container, Heading, VStack, Input, Button, Textarea, Select, useToast, Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { getFundingPoolContract } from "../utils/FundingPool";
import Footer from "../components/Footer";

const CONTRACT_ADDRESS = "0x3Cd4b170441aFEE9E8f4CA8080e60D488F076913";

export default function Funding() {
    const [formData, setFormData] = useState({
        name: "",
        fundingAmount: "",
        projectType: "",
        description: "",
        milestoneDescriptions: [""],
        milestoneAmounts: [""],
    });

    const [useMilestones, setUseMilestones] = useState(false);
    const toast = useToast();
    const { address, isConnected } = useAccount();

    const handleChange = (e, idx = null, type = "") => {
        if (idx !== null) {
            const updated = [...formData[type]];
            updated[idx] = e.target.value;
            setFormData({ ...formData, [type]: updated });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const addMilestone = () => {
        setFormData(prev => ({
            ...prev,
            milestoneDescriptions: [...prev.milestoneDescriptions, ""],
            milestoneAmounts: [...prev.milestoneAmounts, ""]
        }));
    };

    const handleSubmit = async () => {
        if (!window.ethereum || !isConnected || !address) {
            toast({ title: "Connect wallet first!", status: "error" });
            return;
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = getFundingPoolContract(signer, CONTRACT_ADDRESS);

        let milestoneDescriptions = formData.milestoneDescriptions.filter(desc => desc.trim() !== "");
        let milestoneAmounts = formData.milestoneAmounts.filter(amount => amount.trim() !== "").map(amount => ethers.parseEther(amount));

        if (!useMilestones || milestoneDescriptions.length === 0) {
            milestoneDescriptions = ["Full Project"];
            milestoneAmounts = [ethers.parseEther(formData.fundingAmount)];
        }

        try {
            const tx = await contract.createCampaign(
                formData.name,
                ethers.parseEther(formData.fundingAmount),
                2592000,
                milestoneDescriptions,
                milestoneAmounts
            );
            await tx.wait();

            toast({ title: "Project submitted successfully!", status: "success" });
        } catch (error) {
            console.error("Error:", error);
            toast({ title: "Submission failed.", description: error.reason || error.message, status: "error" });
        }
    };

    return (
        <>
            <Container maxW="container.md" py={24}>
                <Box bg="white" p={8} rounded="xl" boxShadow="lg">
                    <VStack spacing={4}>
                        <Heading size="xl">Create Funding Campaign</Heading>
                        <Input name="name" placeholder="Campaign Name" value={formData.name} onChange={handleChange} />
                        <Select name="projectType" placeholder="Select Project Type" value={formData.projectType} onChange={handleChange}>
                            <option value="Art">Art</option>
                            <option value="Tech">Tech</option>
                            <option value="Music">Music</option>
                            <option value="Film">Film</option>
                            <option value="Other">Other</option>
                        </Select>
                        <Input name="fundingAmount" placeholder="Funding Amount (ETH)" value={formData.fundingAmount} onChange={handleChange} />
                        <Textarea name="description" placeholder="Detailed Description" value={formData.description} onChange={handleChange} />

                        <FormControl display="flex" alignItems="center">
                            <FormLabel htmlFor="milestones-toggle" mb="0">Use Milestones?</FormLabel>
                            <Switch id="milestones-toggle" isChecked={useMilestones} onChange={() => setUseMilestones(!useMilestones)} />
                        </FormControl>

                        {useMilestones && formData.milestoneDescriptions.map((_, idx) => (
                            <Box key={idx} w="100%">
                                <Textarea placeholder={`Milestone ${idx + 1} Description`} value={formData.milestoneDescriptions[idx]} onChange={(e) => handleChange(e, idx, "milestoneDescriptions")} />
                                <Input placeholder={`Milestone ${idx + 1} Amount (ETH)`} value={formData.milestoneAmounts[idx]} onChange={(e) => handleChange(e, idx, "milestoneAmounts")} />
                            </Box>
                        ))}

                        {useMilestones && <Button onClick={addMilestone}>Add Another Milestone</Button>}

                        <Button colorScheme="teal" size="lg" onClick={handleSubmit}>Submit Campaign</Button>
                    </VStack>
                </Box>
            </Container>
            <Footer />
        </>
    );
}