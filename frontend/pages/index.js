import { Box, Heading, Text, Button, VStack, Container, Image, SimpleGrid, Flex, Link, HStack, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaBolt, FaLock, FaUsers, FaDollarSign, FaCheckCircle, FaVoteYea, FaCoins, FaArrowRight } from "react-icons/fa";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

// Motion components
const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionSpan = motion.span;

// StatNumber component (unchanged for brevity, but ensure text color adapts below)
const StatNumber = ({ endValue, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
      let start = 0;
      const duration = 2000;
      const increment = endValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          start = endValue;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, endValue, controls]);

  const textColor = useColorModeValue("teal.500", "teal.300"); // Adapt color for dark mode

  return (
    <MotionSpan
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      style={{
        fontSize: "2.25rem",
        color: textColor,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "bold",
      }}
    >
      {`${count.toLocaleString()}${suffix}`}
    </MotionSpan>
  );
};

export default function Home() {
  // Dynamic colors based on color mode
  const bgGradient = useColorModeValue("linear(to-br, #14B8A6, #ffffff)", "linear(to-br, #0D9488, #1A202C)");
  const textColor = useColorModeValue("gray.900", "white");
  const subTextColor = useColorModeValue("gray.700", "gray.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const buttonBg = useColorModeValue("white", "gray.700");
  const buttonText = useColorModeValue("teal.600", "teal.200");
  const shadowColor = useColorModeValue("rgba(0, 0, 0, 0.2)", "rgba(255, 255, 255, 0.1)");

  return (
    <Flex
      direction="column"
      minH="100vh"
      bgGradient={bgGradient}
      align="center"
      justify="flex-start"
      textAlign="center"
      pt="64px"
      overflow="hidden"
    >
      {/* Hero Section */}
      <MotionBox
        width="100%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        position="relative"
        overflow="hidden"
      >
        <MotionImage
          src="/hero-image.png"
          alt="Creova Hero - Decentralized Funding Platform"
          width="100%"
          height={{ base: "300px", md: "485px" }}
          objectFit="cover"
          objectPosition="center"
          initial={{ x: 0 }}
          animate={{ x: [-10, 10] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgGradient={useColorModeValue(
            "linear(to-b, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
            "linear(to-b, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))"
          )}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          px={4}
          pt={{ base: "60px", md: "80px" }}
        >
          <VStack spacing={{ base: 5, md: 8 }}>
            <MotionBox initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <Heading
                as="h1"
                size={{ base: "xl", md: "3xl" }}
                fontWeight="extrabold"
                color="white"
                lineHeight={1.3}
                textShadow={useColorModeValue("0 4px 12px rgba(0, 0, 0, 0.8)", "0 4px 12px rgba(0, 0, 0, 0.9)")}
                letterSpacing="0.5px"
                fontFamily="Poppins, sans-serif"
              >
                Web3 Funding for Impact-Driven Projects
              </Heading>
            </MotionBox>
            <MotionBox initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}>
              <Text
                fontSize={{ base: "sm", md: "lg" }}
                color="white"
                fontWeight="semibold"
                maxW="800px"
                lineHeight={1.7}
                textShadow={useColorModeValue("0 2px 6px rgba(0, 0, 0, 0.8)", "0 2px 6px rgba(0, 0, 0, 0.9)")}
              >
                Creova provides instant, transparent, and decentralised funding—backing groundbreaking innovations, public goods, and mission-driven ventures through crowdfunding and strategic Treasury grants.
              </Text>
            </MotionBox>
            <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
              <HStack spacing={5} mt={8}>
                <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    as={NextLink}
                    href="/funding"
                    bg={buttonBg}
                    color={buttonText}
                    _hover={{ bg: "transparent", color: "white", borderColor: "white" }}
                    _focus={{ boxShadow: "0 0 0 3px teal.300" }}
                    borderWidth="2px"
                    borderColor="white"
                    size="lg"
                    px={8}
                    py={6}
                    fontSize="lg"
                    boxShadow={`0 8px 24px ${shadowColor}`}
                    borderRadius="full"
                    transition="all 0.3s ease"
                    aria-label="Launch Your Project"
                  >
                    Launch Your Project
                  </Button>
                </MotionBox>
                <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    as={NextLink}
                    href="/explore"
                    bg={buttonBg}
                    color={buttonText}
                    _hover={{ bg: "transparent", color: "white", borderColor: "white" }}
                    _focus={{ boxShadow: "0 0 0 3px teal.300" }}
                    borderWidth="2px"
                    borderColor="white"
                    size="lg"
                    px={8}
                    py={6}
                    fontSize="lg"
                    boxShadow={`0 8px 24px ${shadowColor}`}
                    borderRadius="full"
                    transition="all 0.3s ease"
                    aria-label="Discover Projects"
                  >
                    Discover Projects
                  </Button>
                </MotionBox>
              </HStack>
            </MotionBox>
          </VStack>
        </MotionBox>
      </MotionBox>

      {/* How Creova Works and What Makes Us Different */}
      {[
        {
          title: "How Creova Works",
          items: [
            { icon: FaCheckCircle, title: "1. Project Submission", text: "Submit projects, choosing crowdfunding or Treasury grants." },
            { icon: FaVoteYea, title: "2. Transparent Review", text: "Proposals undergo community DAO voting for transparent approval." },
            { icon: FaCoins, title: "3. Fund Distribution", text: "Upon approval, projects receive immediate, blockchain-based funding." },
          ],
        },
        {
          title: "What Makes Us Different?",
          items: [
            { icon: FaBolt, title: "Instant Liquidity", text: "Projects receive immediate blockchain-based funding." },
            { icon: FaUsers, title: "Community-Driven", text: "Transparent decision-making that empowers communities." },
            { icon: FaDollarSign, title: "Zero Middlemen", text: "Direct funding without hidden fees or intermediaries." },
            { icon: FaLock, title: "Blockchain Secured", text: "Immutable smart contracts = transparency and trust." },
          ],
        },
      ].map((section, idx) => (
        <Container key={idx} maxW="container.xl" py={14} mt={idx === 0 ? 22 : 0}>
          <Heading
            as="h2"
            size={{ base: "lg", md: "2xl" }}
            mb={10}
            fontWeight="bold"
            color={textColor}
            textShadow={`0 1px 3px ${shadowColor}`}
            lineHeight={1.3}
            fontFamily="Poppins, sans-serif"
          >
            {section.title}
            <Box mt={3} width="60px" height="4px" bgGradient="linear(to-r, teal.400, teal.500)" borderRadius="full" mx="auto" />
          </Heading>
          <SimpleGrid columns={{ base: 1, md: section.items.length }} spacing={8}>
            {section.items.map((item, index) => (
              <MotionBox
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                flex="1"
              >
                <VStack
                  spacing={5}
                  p={8}
                  bg={cardBg}
                  borderRadius="3xl"
                  boxShadow={`0 12px 32px ${shadowColor}`}
                  height="100%"
                  minH="300px"
                  justify="space-between"
                  _hover={{ transform: "translateY(-6px)", boxShadow: `0 16px 40px ${shadowColor}` }}
                >
                  <Box
                    bg="teal.500"
                    p={5}
                    borderRadius="full"
                    boxShadow={`0 4px 8px ${shadowColor}`}
                    transition="transform 0.3s ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                  >
                    <motion.div whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
                      <item.icon size="48px" color="white" aria-label={item.title} />
                    </motion.div>
                  </Box>
                  <VStack spacing={3} flex="1" justify="center">
                    <Heading as="h3" size="md" color={textColor} fontWeight="bold" fontFamily="Poppins, sans-serif">
                      {item.title}
                    </Heading>
                    <Text color={subTextColor} lineHeight={1.7} fontSize="md" px={2}>
                      {item.text}
                    </Text>
                  </VStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      ))}

      {/* Spotlight Section */}
      <Container maxW="container.md" py={14} mb={22}>
        <Heading
          as="h2"
          size={{ base: "lg", md: "2xl" }}
          mb={10}
          fontWeight="bold"
          color={textColor}
          textShadow={`0 1px 3px ${shadowColor}`}
          lineHeight={1.3}
          fontFamily="Poppins, sans-serif"
        >
          Spotlight Project
          <Box mt={3} width="60px" height="4px" bgGradient="linear(to-r, teal.400, teal.500)" borderRadius="full" mx="auto" />
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          bgGradient={useColorModeValue("linear(to-r, teal.400, teal.100)", "linear(to-r, teal.600, teal.900)")}
          borderRadius="3xl"
          overflow="hidden"
          boxShadow={`0 16px 48px ${shadowColor}`}
          align="center"
          mx="auto"
          maxW="3xl"
        >
          <Box flex="1" alignSelf="stretch">
            <Image src="/greenfuture-impact.png" alt="GreenFuture Initiative" objectFit="cover" height="100%" width="100%" />
          </Box>
          <VStack flex="1" spacing={4} p={{ base: 6, md: 8 }} align="center" justify="center" textAlign="center">
            <Heading size="lg" color={textColor} fontFamily="Poppins, sans-serif">
              GreenFuture Initiative
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={subTextColor} px={2}>
              GreenFuture raised 60 ETH in just 48 hours, providing renewable energy education to over 5,000 students worldwide.
            </Text>
            <Button
              colorScheme="teal"
              size="md"
              px={8}
              as={Link}
              href="mailto:adam@creova.xyz"
              _hover={{ transform: "translateY(-2px)", boxShadow: `0 8px 24px ${shadowColor}` }}
              _focus={{ boxShadow: "0 0 0 3px teal.300" }}
              borderRadius="full"
              mt={4}
              aria-label="Contact Creova Team"
            >
              Contact Creova
            </Button>
          </VStack>
        </Flex>
      </Container>

      {/* Testimonials Section */}
      <Container maxW="container.xl" py={14} mb={22}>
        <Heading
          as="h2"
          size={{ base: "lg", md: "2xl" }}
          mb={10}
          fontWeight="bold"
          color={textColor}
          textShadow={`0 1px 3px ${shadowColor}`}
          lineHeight={1.3}
          fontFamily="Poppins, sans-serif"
        >
          What Our Users Say
          <Box mt={3} width="60px" height="4px" bgGradient="linear(to-r, teal.400, teal.500)" borderRadius="full" mx="auto" />
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {[
            { quote: "“Creova’s instant funding transformed our project overnight!”", name: "- Sandra, GreenFuture" },
            { quote: "“The transparency and community support are unmatched.”", name: "- Maddie, SolarHope" },
            { quote: "“No middlemen, just results. Creova delivers.”", name: "- Lauren, EduChain" },
          ].map((testimonial, idx) => (
            <MotionBox
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * idx }}
              p={6}
              bg={cardBg}
              borderRadius="xl"
              boxShadow={`0 12px 32px ${shadowColor}`}
              minH="250px"
            >
              <VStack spacing={4} height="100%" justify="space-between">
                <Text fontSize="md" color={subTextColor} flex="1" display="flex" alignItems="center">
                  {testimonial.quote}
                </Text>
                <Text fontWeight="bold" color={useColorModeValue("teal.600", "teal.300")} width="100%" textAlign="left">
                  {testimonial.name}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      {/* Stats Section */}
      <Container maxW="container.xl" py={14} mb={22}>
        <Heading
          as="h2"
          size={{ base: "lg", md: "2xl" }}
          mb={10}
          fontWeight="bold"
          color={textColor}
          textShadow={`0 1px 3px ${shadowColor}`}
          lineHeight={1.3}
          fontFamily="Poppins, sans-serif"
        >
          Creova’s Impact to Date
          <Box mt={3} width="60px" height="4px" bgGradient="linear(to-r, teal.400, teal.500)" borderRadius="full" mx="auto" />
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <MotionBox
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            bg={cardBg}
            p={8}
            borderRadius="3xl"
            boxShadow={`0 12px 32px ${shadowColor}`}
          >
            <Heading size="xl" color={useColorModeValue("teal.500", "teal.300")} fontFamily="Poppins, sans-serif">
              <StatNumber endValue={9250} suffix=" ETH" />
            </Heading>
            <Text color={subTextColor}>Total Funding Raised</Text>
          </MotionBox>
          <MotionBox
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            bg={cardBg}
            p={8}
            borderRadius="3xl"
            boxShadow={`0 12px 32px ${shadowColor}`}
          >
            <Heading size="xl" color={useColorModeValue("teal.500", "teal.300")} fontFamily="Poppins, sans-serif">
              <StatNumber endValue={313} />
            </Heading>
            <Text color={subTextColor}>Successful Projects Funded</Text>
          </MotionBox>
          <MotionBox
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            bg={cardBg}
            p={8}
            borderRadius="3xl"
            boxShadow={`0 12px 32px ${shadowColor}`}
          >
            <Heading size="xl" color={useColorModeValue("teal.500", "teal.300")} fontFamily="Poppins, sans-serif">
              <StatNumber endValue={8458} />
            </Heading>
            <Text color={subTextColor}>Creova Members</Text>
          </MotionBox>
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Container maxW="container.xl" py={14}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          bgGradient={useColorModeValue("linear(to-br, teal.400, teal.100)", "linear(to-br, teal.600, teal.900)")}
          borderRadius="2xl"
          p={10}
          boxShadow={`0 16px 48px ${shadowColor}`}
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Heading as="h2" size="xl" mb={4} color={textColor} fontFamily="Poppins, sans-serif" lineHeight={1.3}>
              Let's Build Your Vision
            </Heading>
            <Text fontSize="lg" color={subTextColor}>
              Have an idea or question? Reach out directly—we're here to support your vision.
            </Text>
          </Box>
          <Button
            colorScheme="teal"
            size="lg"
            px={10}
            as={Link}
            href="mailto:adam@creova.xyz"
            _hover={{ transform: "translateY(-4px)", boxShadow: `0 8px 24px ${shadowColor}` }}
            _focus={{ boxShadow: "0 0 0 3px teal.300" }}
            borderRadius="full"
            mt={{ base: 8, md: 0 }}
            aria-label="Contact Creova Team"
          >
            Contact Creova
          </Button>
        </Flex>
      </Container>

      <Footer />
    </Flex>
  );
}