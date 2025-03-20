import { Box, Container, Heading, Text, VStack, Button, SimpleGrid, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaCoins, FaBook, FaHeart, FaGlobe, FaUsers, FaLeaf } from "react-icons/fa";
import Footer from "../components/Footer";
import { useEffect } from "react";
import NextLink from "next/link";

const MotionBox = motion(Box);

export default function Grants() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const spacing = {
    sm: 4,
    md: 6,
    lg: 10,
    xl: 16,
    xxl: 26
  };

  // Dynamic color mode values
  const bgGradient = useColorModeValue(
    "linear(to-br, #14B8A6, white)", // Light mode (unchanged)
    "linear(to-br, #0D9488, #1A202C)" // Dark mode
  );
  
  const cardBg = useColorModeValue(
    "white", // Light mode (unchanged)
    "gray.800" // Dark mode
  );
  
  const textColor = useColorModeValue(
    "grey.900", // Light mode (unchanged)
    "white" // Dark mode
  );
  
  const subTextColor = useColorModeValue(
    "grey.700", // Light mode (unchanged)
    "gray.300" // Dark mode
  );
  
  const shadow = useColorModeValue(
    "0 12px 32px rgba(0, 0, 0, 0.2)", // Light mode (unchanged)
    "0 12px 32px rgba(255, 255, 255, 0.1)" // Dark mode
  );
  
  const hoverShadow = useColorModeValue(
    "0 16px 40px rgba(0, 0, 0, 0.25)", // Light mode (unchanged)
    "0 16px 40px rgba(255, 255, 255, 0.1)" // Dark mode
  );

  const buttonStyles = {
    base: {
      bg: cardBg,
      color: useColorModeValue("teal.600", "white"),
      borderWidth: "2px",
      borderColor: cardBg,
      borderRadius: "full",
      px: spacing.lg,
      py: spacing.md,
      fontSize: "lg",
      boxShadow: useColorModeValue("0 8px 24px rgba(0, 0, 0, 0.25)", "0 8px 24px rgba(255, 255, 255, 0.1)"),
      transition: "all 0.3s ease",
      _hover: {
        bg: "transparent",
        color: "white",
        borderColor: "white",
      },
    },
    cta: {
      bg: useColorModeValue("teal.500", "teal.600"),
      color: "white",
      _hover: {
        bg: useColorModeValue("teal.600", "teal.700"),
        transform: "translateY(-4px)",
        boxShadow: useColorModeValue("0 8px 24px rgba(0, 0, 0, 0.25)", "0 8px 24px rgba(255, 255, 255, 0.1)"),
      },
    },
  };

  return (
    <Flex
      direction="column"
      minH="100vh"
      bgGradient={bgGradient}
      align="center"
      justify="flex-start"
      textAlign="center"
      pt={spacing.xxl}
      overflow="hidden"
      color={textColor}
      fontFamily="Poppins, sans-serif"
    >
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        maxW="container.lg"
        px={4}
        py={20}
      >
        <Heading
          as="h1"
          size={{ base: "xl", md: "3xl" }}
          fontWeight="extrabold"
          color="white"
          lineHeight={1.3}
          textShadow={useColorModeValue("0 2px 8px rgba(0, 0, 0, 0.8)", "0 2px 8px rgba(255, 255, 255, 0.1)")}
          fontFamily="Poppins, sans-serif"
        >
          Funding High-Impact Projects, Community Empowered
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="white"
          mt={6}
          maxW="800px"
          mx="auto"
          lineHeight={1.7}
          textShadow={useColorModeValue("0 2px 4px rgba(0, 0, 0, 0.8)", "0 2px 4px rgba(255, 255, 255, 0.1)")}
        >
          Creova drives <strong>high-impact projects</strong> with decentralised, transparent, and instant Web3 funding. From renewable energy to education, we empower creators to make a difference—without gatekeepers.
        </Text>
        <HStack spacing={5} mt={8} justify="center">
          <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              as={NextLink}
              href="/funding?type=grant"
              {...buttonStyles.base}
              size="lg"
              px={8}
              py={6}
            >
              Apply for a Creova Grant
            </Button>
          </MotionBox>
          <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              as={NextLink}
              href="/explore"
              {...buttonStyles.base}
              size="lg"
              px={8}
              py={6}
            >
              Explore Impact Projects
            </Button>
          </MotionBox>
        </HStack>
      </MotionBox>

      {/* What Are Treasury Grants */}
      <Container maxW="container.xl" py={spacing.xl}>
        <Heading as="h2" size={{ base: "lg", md: "2xl" }} mb={spacing.lg} fontWeight="bold">
          What Are Treasury Grants?
          <Box mt={spacing.sm} width="60px" height="4px" bgGradient="linear(to-r, teal.400, teal.500)" borderRadius="full" mx="auto" />
        </Heading>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <VStack
            spacing={spacing.sm}
            p={spacing.md}
            bg={cardBg}
            borderRadius="3xl"
            boxShadow={shadow}
            minH="250px"
            _hover={{ transform: "translateY(-6px)", boxShadow: hoverShadow }}
            transition="all 0.3s ease"
          >
            <Box bg="teal.500" p={spacing.sm} borderRadius="full" boxShadow={useColorModeValue("0 4px 8px rgba(0, 0, 0, 0.2)", "0 4px 8px rgba(255, 255, 255, 0.1)")}>
              <motion.div whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
                <FaCoins size="48px" color="white" />
              </motion.div>
            </Box>
            <Text color={subTextColor} fontSize="md" lineHeight={1.7} maxW="800px">
              Treasury-backed funding (1ETH–100ETH) for projects that <Text as="span" fontWeight="bold">benefit the community</Text>. Unlike crowdfunding, these grants come{" "}
              <Text as="span" fontWeight="bold">directly from the Creova Treasury</Text> to support impact-driven initiatives—no equity or repayment required.
            </Text>
          </VStack>
        </MotionBox>
      </Container>

      {/* Who Can Apply */}
      <Container maxW="container.xl" py={spacing.xl}>
        <Heading as="h2" size={{ base: "lg", md: "2xl" }} mb={spacing.lg} fontWeight="bold">
          Who Can Apply?
          <Box mt={spacing.sm} width="60px" height="4px" bgGradient="linear(to-r, teal.400, teal.500)" borderRadius="full" mx="auto" />
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={spacing.lg}>
          {[
            { icon: FaBook, title: "Education", text: "Open-source learning, blockchain research, tech training" },
            { icon: FaHeart, title: "Charity", text: "Charities, disaster relief, humanitarian efforts" },
            { icon: FaGlobe, title: "Public Good", text: "Web3 sustainability, decentralised governance" },
            { icon: FaUsers, title: "Global Reach", text: "Individuals, teams, and organisations worldwide with impactful ideas" },
          ].map((item, idx) => (
            <MotionBox
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * idx }}
            >
              <VStack
                spacing={spacing.sm}
                p={spacing.lg}
                bg={cardBg}
                borderRadius="3xl"
                boxShadow={shadow}
                minH="300px"
                _hover={{ transform: "translateY(-6px)", boxShadow: hoverShadow }}
                transition="all 0.3s ease"
              >
                <Box bg="teal.500" p={spacing.sm} borderRadius="full" boxShadow={useColorModeValue("0 4px 8px rgba(0, 0, 0, 0.2)", "0 4px 8px rgba(255, 255, 255, 0.1)")}>
                  <motion.div whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
                    <item.icon size="48px" color="white" />
                  </motion.div>
                </Box>
                <Heading as="h3" size="md" color={textColor}>
                  {item.title}
                </Heading>
                <Text color={subTextColor} fontSize="md" lineHeight={1.7}>
                  {item.text}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      {/* Grant Process */}
      <Container maxW="container.xl" py={spacing.xl}>
        <Heading as="h2" size={{ base: "lg", md: "2xl" }} mb={spacing.lg} fontWeight="bold">
          Grant Process
          <Box mt={spacing.sm} width="60px" height="4px" bgGradient="linear(to-r, teal.400, teal.500)" borderRadius="full" mx="auto" />
        </Heading>
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 4 }} 
          spacing={spacing.md} 
          maxW="1200px" 
          mx="auto"
        >
          {[
            { step: "1", title: "Submit Your Proposal", text: "Share your project vision with a detailed application outlining goals and impact." },
            { step: "2", title: "Expert Review", text: "Our team evaluates your proposal for feasibility and alignment—DAO voting coming soon!" },
            { step: "3", title: "Staged Funding", text: <>Receive Treasury funds <Text as="span" fontWeight="bold">in milestones</Text> to keep your project on track.</> },
            { step: "4", title: "Show Your Impact", text: <>Submit <Text as="span" fontWeight="bold">progress updates</Text> to unlock further funding and inspire the community.</> },
          ].map((item, idx) => (
            <MotionBox
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * idx }}
            >
              <VStack
                bg={cardBg}
                borderRadius="2xl"
                p={spacing.md}
                spacing={spacing.sm}
                minH="300px"
                boxShadow={useColorModeValue("0 8px 24px rgba(0, 0, 0, 0.15)", "0 8px 24px rgba(255, 255, 255, 0.1)")}
                _hover={{ transform: "translateY(-4px)", boxShadow: hoverShadow }}
                transition="all 0.3s ease"
              >
                <Flex
                  bg="teal.500"
                  color="white"
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  fontWeight="bold"
                  fontSize="xl"
                  boxShadow={useColorModeValue("0 4px 8px rgba(0, 0, 0, 0.2)", "0 4px 8px rgba(255, 255, 255, 0.1)")}
                >
                  {item.step}
                </Flex>
                <Text fontWeight="bold" fontSize="md" color={textColor}>
                  {item.title}
                </Text>
                <Text color={subTextColor} fontSize="md" lineHeight={1.7}>
                  {item.text}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          mt={spacing.lg}
        >
          <VStack
            spacing={spacing.sm}
            p={spacing.lg}
            bg={cardBg}
            borderRadius="3xl"
            boxShadow={shadow}
            maxW="800px"
            mx="auto"
            _hover={{ transform: "translateY(-6px)", boxShadow: hoverShadow }}
            transition="all 0.3s ease"
          >
            <Box bg="teal.500" p={spacing.sm} borderRadius="full" boxShadow={useColorModeValue("0 4px 8px rgba(0, 0, 0, 0.2)", "0 4px 8px rgba(255, 255, 255, 0.1)")}>
              <motion.div whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
                <FaLeaf size="48px" color="white" />
              </motion.div>
            </Box>
            <Heading as="h3" size="md" color={textColor}>
              Sustainability Matters
            </Heading>
            <Text color={subTextColor} fontSize="md" lineHeight={1.7}>
              We allocate only <Text as="span" fontWeight="bold" color="teal.600">10% of the Treasury</Text> each quarter for grants, ensuring Creova’s <Text as="span" fontWeight="bold" color="teal.600">long-term stability</Text> and enduring impact.
            </Text>
          </VStack>
        </MotionBox>
      </Container>

      {/* CTA Section */}
      <Container maxW="container.xl" py={spacing.xl}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          bgGradient={useColorModeValue("linear(to-br, teal.400, teal.100)", "linear(to-br, #0D9488, #1A202C)")}
          borderRadius="2xl"
          p={spacing.lg}
          boxShadow={useColorModeValue("0 16px 48px rgba(0, 0, 0, 0.25)", "0 16px 48px rgba(255, 255, 255, 0.1)")}
        >
          <Box textAlign={{ base: "center", md: "left" }} maxW={{ md: "60%" }}>
            <Heading as="h2" size="xl" mb={spacing.sm} color={textColor}>
              Ready to Fund Your Impact?
            </Heading>
            <Text fontSize="lg" color={subTextColor}>
              Apply for a Creova Treasury Grant and start making a difference today.
            </Text>
          </Box>
          <Button
            as={NextLink}
            href="/funding?type=grant"
            mt={{ base: spacing.lg, md: 0 }}
            {...buttonStyles.cta}
            size="lg"
            px={spacing.xl}
            asMotion={MotionBox}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </Button>
        </Flex>
      </Container>

      <Footer />
    </Flex>
  );
}