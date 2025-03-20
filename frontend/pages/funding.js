import { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  Box, Container, Heading, VStack, Input, Button, Textarea, useToast, Text, FormControl, FormLabel, FormHelperText, InputGroup, InputRightElement,
  useColorModeValue, // Add this import
} from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { getFundingPoolContract } from "../utils/FundingPool";
import { motion } from "framer-motion";
import { FaFileUpload, FaEthereum, FaChevronDown } from "react-icons/fa";
import Footer from "../components/Footer";
import { uploadFileToIPFS } from "../utils/pinata";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_FUNDINGPOOL_ADDRESS;
const MotionBox = motion(Box);

const MAX_DESCRIPTION_CHARS = 100;
const MAX_HERO_SIZE = 5 * 1024 * 1024;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const KYC_THRESHOLD = 5;

const CustomDropdown = ({ value, onChange, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  const options = ["Crowdfunding", "TreasuryGrant"];

  // Dynamic styles for dropdown
  const bg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const shadow = useColorModeValue("md", "0 4px 6px rgba(255, 255, 255, 0.1)");

  const handleSelect = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
    setHasSelected(true);
  };

  return (
    <Box position="relative" fontFamily="Poppins, sans-serif">
      <Box
        as="button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        bg={bg}
        border="1px solid"
        borderColor={hasSelected && !isOpen ? "teal.400" : borderColor}
        borderRadius="md"
        px={4}
        py={2}
        height="48px"
        width="full"
        textAlign="left"
        fontSize="16px"
        fontFamily="Poppins, sans-serif"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        _hover={{ borderColor: "teal.500" }}
        _focus={{ borderColor: "teal.400", bg: "teal.400", color: "white" }}
      >
        <Text fontWeight={isOpen ? "bold" : "normal"}>{value || "Select Funding Type"}</Text>
        <FaChevronDown color={isOpen ? "teal.400" : "gray.500"} />
      </Box>
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          right={0}
          bg={bg}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="md"
          mt={1}
          zIndex={10}
          boxShadow={shadow}
        >
          {options.map((option) => (
            <Box
              key={option}
              px={4}
              py={2}
              fontSize="16px"
              fontFamily="Poppins, sans-serif"
              _hover={{ bg: "teal.400", color: "white" }}
              onClick={() => handleSelect(option)}
              cursor="pointer"
              color={value === option ? textColor : textColor}
            >
              {option}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default function Funding() {
  const [formData, setFormData] = useState({
    name: "",
    fundingAmount: "",
    fundingType: "Crowdfunding",
    description: "",
    file: null,
    heroMedia: null,
  });
  const [errors, setErrors] = useState({});
  const [isKYCVerified, setIsKYCVerified] = useState(false);
  const [availableTreasuryFunds, setAvailableTreasuryFunds] = useState(null);

  const toast = useToast();
  const { address, isConnected } = useAccount();
  const [loading, setLoading] = useState(false);

  // Define dynamic styles
  const bgGradient = useColorModeValue(
    "linear(to-br, #14B8A6, #ffffff)", // Light mode
    "linear(to-br, #0D9488, #1A202C)"  // Dark mode
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const subTextColor = useColorModeValue("gray.500", "gray.300");
  const shadow = useColorModeValue("lg", "0 4px 6px rgba(255, 255, 255, 0.1)");
  const infoBoxBg = useColorModeValue("teal.50", "gray.700");
  const infoBoxBorderColor = useColorModeValue("teal.400", "teal.600");
  const infoBoxTextColor = useColorModeValue("teal.800", "gray.300");
  const infoBoxHeadingColor = useColorModeValue("teal.700", "teal.300");
  const treasuryBoxBg = useColorModeValue("yellow.50", "gray.700");
  const treasuryBoxBorderColor = useColorModeValue("yellow.400", "yellow.600");
  const treasuryBoxTextColor = useColorModeValue("yellow.800", "gray.300");
  const treasuryBoxHeadingColor = useColorModeValue("yellow.700", "yellow.300");

  useEffect(() => {
    if (!isConnected || !address || !window.ethereum) return;

    const fetchData = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = getFundingPoolContract(provider, CONTRACT_ADDRESS);

        const kycStatus = await contract.isKYCVerified(address);
        setIsKYCVerified(kycStatus);

        if (formData.fundingType === "TreasuryGrant") {
          const funds = await contract.getAvailableTreasuryFunds();
          setAvailableTreasuryFunds(ethers.formatEther(funds));
        } else {
          setAvailableTreasuryFunds(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          title: "Error fetching data",
          description: "Could not load treasury funds or KYC status.",
          status: "error",
          colorScheme: "teal",
        });
      }
    };

    fetchData();
  }, [address, isConnected, formData.fundingType, toast]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Project name is required";
    if (!formData.fundingAmount || isNaN(formData.fundingAmount) || parseFloat(formData.fundingAmount) <= 0) {
      newErrors.fundingAmount = "Enter a valid ETH amount (e.g., 1.5)";
    }
    if (formData.fundingType === "TreasuryGrant") {
      const fundingAmount = parseFloat(formData.fundingAmount);
      if (fundingAmount > KYC_THRESHOLD && !isKYCVerified) {
        newErrors.fundingAmount = `KYC required for Treasury Grants over ${KYC_THRESHOLD} ETH`;
      }
      if (availableTreasuryFunds !== null && fundingAmount > parseFloat(availableTreasuryFunds)) {
        newErrors.fundingAmount = `Exceeds available treasury funds (${parseFloat(availableTreasuryFunds).toFixed(2)} ETH)`;
      }
    }
    if (!formData.description) newErrors.description = "Description is required";
    if (formData.description.length > MAX_DESCRIPTION_CHARS) {
      newErrors.description = `Max ${MAX_DESCRIPTION_CHARS} characters`;
    }
    if (formData.heroMedia && (
      !["image/jpeg", "image/png", "video/mp4"].includes(formData.heroMedia.type) ||
      formData.heroMedia.size > MAX_HERO_SIZE
    )) {
      newErrors.heroMedia = "Upload a JPEG/PNG image or MP4 video (max 5MB)";
    }
    if (formData.file && formData.file.size > MAX_FILE_SIZE) {
      newErrors.file = "File must be under 10MB";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const ALLOWED_FILE_TYPES = ["application/pdf", "application/msword"];
  const ALLOWED_HERO_TYPES = ["image/jpeg", "image/png", "video/mp4"];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setErrors((prev) => ({ ...prev, file: "Only PDF or Word documents are allowed" }));
      setFormData((prev) => ({ ...prev, file: null }));
      return;
    }

    setErrors((prev) => ({ ...prev, file: "" }));
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleHeroMediaChange = (e) => {
    const heroMedia = e.target.files[0];
    if (!heroMedia) return;

    if (!ALLOWED_HERO_TYPES.includes(heroMedia.type)) {
      setErrors((prev) => ({ ...prev, heroMedia: "Only JPEG, PNG, or MP4 files are allowed" }));
      setFormData((prev) => ({ ...prev, heroMedia: null }));
      return;
    }

    setErrors((prev) => ({ ...prev, heroMedia: "" }));
    setFormData((prev) => ({ ...prev, heroMedia }));
  };

  const handleSubmit = async () => {
    if (!window.ethereum || !isConnected || !address) {
      toast({
        title: "Wallet not connected",
        status: "error",
        colorScheme: "teal",
      });
      return;
    }

    if (!validateForm()) {
      toast({
        title: "Form errors",
        description: "Please fix the errors before submitting.",
        status: "warning",
        colorScheme: "teal",
      });
      return;
    }

    setLoading(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = getFundingPoolContract(signer, CONTRACT_ADDRESS);

      let milestoneDescriptions, milestoneAmounts;
      const fundingGoalWei = ethers.parseEther(formData.fundingAmount);

      if (formData.fundingType === "Crowdfunding") {
        milestoneDescriptions = ["Full Project"];
        milestoneAmounts = [fundingGoalWei];
      } else {
        milestoneDescriptions = [];
        milestoneAmounts = [];
      }

      let projectCID = formData.file ? await uploadFileToIPFS(formData.file) : "";
      let heroMediaCID = formData.heroMedia ? await uploadFileToIPFS(formData.heroMedia) : "";

      const tx = await contract.createCampaign(
        formData.name,
        fundingGoalWei,
        formData.fundingType === "Crowdfunding" ? 0 : 1,
        milestoneDescriptions,
        milestoneAmounts,
        projectCID,
        heroMediaCID,
        formData.description
      );

      await tx.wait();

      toast({
        title: "Project submitted successfully!",
        description: formData.fundingType === "Crowdfunding" 
          ? "Awaiting voter approval to start collecting funds."
          : "Awaiting voter approval for treasury funding and milestone reviews.",
        status: "success",
        colorScheme: "teal",
        duration: 5000,
      });

      setFormData({
        name: "",
        fundingAmount: "",
        fundingType: "Crowdfunding",
        description: "",
        file: null,
        heroMedia: null,
      });
      setErrors({});
    } catch (error) {
      console.error("Submission error:", error);
      let errorMessage = "An error occurred during submission.";
      if (error.reason) errorMessage = error.reason;
      else if (error.message) errorMessage = error.message;
      toast({
        title: "Submission failed",
        description: errorMessage,
        status: "error",
        colorScheme: "teal",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MotionBox
        minH="100vh"
        bgGradient={bgGradient}
        py={24}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container maxW="container.md">
          <MotionBox
            bg={cardBg}
            p={10}
            rounded="2xl"
            boxShadow={shadow}
            border="2px solid"
            borderColor="teal.400"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={6} align="stretch">
              <Heading
                size="xl"
                color={textColor}
                textAlign="center"
                fontFamily="Poppins, sans-serif"
                fontWeight="extrabold"
                textShadow="0 1px 1px rgba(0, 0, 0, 0.8)"
              >
                Launch Your Project
              </Heading>

              <FormControl isInvalid={!!errors.fundingType}>
                <FormLabel fontFamily="Poppins, sans-serif" fontWeight="bold" color={textColor}>Funding Type</FormLabel>
                <CustomDropdown
                  name="fundingType"
                  value={formData.fundingType}
                  onChange={handleChange}
                />
                <FormHelperText color={errors.fundingType ? "red.500" : subTextColor}>
                  {errors.fundingType}
                </FormHelperText>
              </FormControl>

              <FormControl isInvalid={!!errors.name}>
                <FormLabel fontFamily="Poppins, sans-serif" fontWeight="bold" color={textColor}>Project Name</FormLabel>
                <Input
                  name="name"
                  placeholder="Enter project name"
                  size="lg"
                  value={formData.name}
                  onChange={handleChange}
                  focusBorderColor="teal.400"
                  fontFamily="Poppins, sans-serif"
                  bg={cardBg}
                  color={textColor}
                />
                <FormHelperText color={errors.name ? "red.500" : subTextColor}>
                  {errors.name}
                </FormHelperText>
              </FormControl>

              <FormControl isInvalid={!!errors.heroMedia}>
                <FormLabel fontFamily="Poppins, sans-serif" fontWeight="bold" color={textColor}>Hero Image/Video</FormLabel>
                <Button
                  as="label"
                  colorScheme="teal"
                  variant="outline"
                  leftIcon={<FaFileUpload />}
                  size="lg"
                  fontFamily="Poppins, sans-serif"
                  _hover={{ bgGradient: "linear(to-r, teal.400, teal.500)", color: "white" }}
                >
                  Upload Hero Media
                  <input type="file" hidden onChange={handleHeroMediaChange} />
                </Button>
                {formData.heroMedia && <Text fontSize="sm" mt={2} color={subTextColor}>{formData.heroMedia.name}</Text>}
                <FormHelperText color={errors.heroMedia ? "red.500" : subTextColor}>
                  {errors.heroMedia || "Optional: JPEG/PNG or MP4 (max 5MB)"}
                </FormHelperText>
              </FormControl>

              <FormControl isInvalid={!!errors.fundingAmount}>
                <FormLabel fontFamily="Poppins, sans-serif" fontWeight="bold" color={textColor}>Funding Goal (ETH)</FormLabel>
                <InputGroup size="lg">
                  <Input
                    name="fundingAmount"
                    placeholder="e.g., 1.5"
                    type="number"
                    step="0.1"
                    value={formData.fundingAmount}
                    onChange={handleChange}
                    focusBorderColor="teal.400"
                    fontFamily="Poppins, sans-serif"
                    bg={cardBg}
                    color={textColor}
                  />
                  <InputRightElement pointerEvents="none">
                    <FaEthereum color={subTextColor} />
                  </InputRightElement>
                </InputGroup>
                <FormHelperText color={errors.fundingAmount ? "red.500" : subTextColor}>
                  {errors.fundingAmount || (formData.fundingType === "TreasuryGrant" && availableTreasuryFunds !== null
                    ? `Available this quarter: ${parseFloat(availableTreasuryFunds).toFixed(2)} ETH`
                    : "")}
                </FormHelperText>
              </FormControl>

              <FormControl isInvalid={!!errors.description}>
                <FormLabel fontFamily="Poppins, sans-serif" fontWeight="bold" color={textColor}>Description</FormLabel>
                <Textarea
                  name="description"
                  placeholder="Briefly describe your project (max 100 characters)"
                  size="lg"
                  value={formData.description}
                  onChange={handleChange}
                  focusBorderColor="teal.400"
                  resize="vertical"
                  fontFamily="Poppins, sans-serif"
                  maxLength={MAX_DESCRIPTION_CHARS}
                  bg={cardBg}
                  color={textColor}
                />
                <FormHelperText color={errors.description ? "red.500" : subTextColor}>
                  {errors.description || `${formData.description.length}/${MAX_DESCRIPTION_CHARS} characters`}
                </FormHelperText>
              </FormControl>

              <FormControl isInvalid={!!errors.file}>
                <FormLabel fontFamily="Poppins, sans-serif" fontWeight="bold" color={textColor}>Project Details (PDF/Doc)</FormLabel>
                <Button
                  as="label"
                  colorScheme="teal"
                  variant="outline"
                  leftIcon={<FaFileUpload />}
                  size="lg"
                  fontFamily="Poppins, sans-serif"
                  _hover={{ bgGradient: "linear(to-r, teal.400, teal.500)", color: "white" }}
                >
                  Upload Project Details
                  <input type="file" hidden onChange={handleFileChange} />
                </Button>
                {formData.file && <Text fontSize="sm" mt={2} color={subTextColor}>{formData.file.name}</Text>}
                <FormHelperText color={errors.file ? "red.500" : subTextColor}>
                  {errors.file || "Optional: Upload a PDF or Word document (max 10MB)"}
                </FormHelperText>
              </FormControl>

              {formData.fundingType === "Crowdfunding" && (
                <Box
                  p={4}
                  bg={infoBoxBg}
                  rounded="lg"
                  border="1px solid"
                  borderColor={infoBoxBorderColor}
                  w="full"
                >
                  <Heading size="md" color={infoBoxHeadingColor} mb={2} fontFamily="Poppins, sans-serif">Crowdfunding Details</Heading>
                  <Text fontSize="sm" color={infoBoxTextColor} fontFamily="Poppins, sans-serif">• 100% - Full Project Funding</Text>
                  <Text fontSize="xs" color={infoBoxTextColor} mt={2} fontFamily="Poppins, sans-serif">
                    Requires voter approval to start. Funds released once goal is met or deadline passes (30 days).
                  </Text>
                </Box>
              )}

              {formData.fundingType === "TreasuryGrant" && (
                <Box
                  p={4}
                  bg={treasuryBoxBg}
                  rounded="lg"
                  border="1px solid"
                  borderColor={treasuryBoxBorderColor}
                  w="full"
                >
                  <Heading size="md" color={treasuryBoxHeadingColor} mb={2} fontFamily="Poppins, sans-serif">Treasury Grant Details</Heading>
                  <Text fontSize="sm" color={treasuryBoxTextColor} fontFamily="Poppins, sans-serif">• 30% - Proof of Concept or MVP</Text>
                  <Text fontSize="sm" color={treasuryBoxTextColor} fontFamily="Poppins, sans-serif">• 30% - Beta/Prototype Completed</Text>
                  <Text fontSize="sm" color={treasuryBoxTextColor} fontFamily="Poppins, sans-serif">• 40% - Final Product Launched</Text>
                  <Text fontSize="xs" color={treasuryBoxTextColor} mt={2} fontFamily="Poppins, sans-serif">
                    Requires voter approval within 14 days, then milestone approvals. KYC needed for grants over {KYC_THRESHOLD} ETH or withdrawals above this amount.
                  </Text>
                </Box>
              )}

              <Button
                colorScheme="teal"
                size="lg"
                w="full"
                isLoading={loading}
                onClick={handleSubmit}
                fontFamily="Poppins, sans-serif"
                fontWeight="bold"
                _hover={{ bgGradient: "linear(to-r, teal.400, teal.500)", boxShadow: "md" }}
              >
                Submit Project
              </Button>
            </VStack>
          </MotionBox>
        </Container>
      </MotionBox>
      <Footer />
    </>
  );
}