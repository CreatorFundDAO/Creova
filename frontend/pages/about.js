import { Box, Heading, Text, Button, VStack, Container, SimpleGrid, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaCoins, FaHandshake, FaKey, FaBalanceScale, FaChartLine } from "react-icons/fa";
import Footer from '../components/Footer';

const MotionBox = motion(Box);

export default function About() {
  const router = useRouter();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <>
      <Box minH="100vh" bgGradient="linear(to-br, #14B8A6, #ffffff)" py={20} pt={28}>
        {/* Hero Section */}
        <Container maxW="container.lg" textAlign="center" mb={16}>
          <MotionBox {...fadeInUp}>
            <Heading as="h1" size="2xl" fontWeight="bold" color="gray.900">
              Decentralised Funding for the Future of Creativity
            </Heading>
            <Text fontSize="lg" color="gray.700" mt={4} maxW="800px" mx="auto">
              Creova empowers creators with instant, decentralised financial support—eliminating traditional gatekeepers and inefficiencies.
            </Text>
          </MotionBox>
        </Container>

        {/* How Creova Works */}
        <Container maxW="container.xl" py={16}>
          <MotionBox {...fadeInUp}>
            <Heading as="h2" size="xl" textAlign="center" mb={10} color="gray.900">
              How Creova Works
            </Heading>
          </MotionBox>
          <SimpleGrid columns={[1, 2, 3]} spacing={12}>
            {[{ icon: FaKey, title: "1. Apply", text: "Creators submit proposals with project details and funding requirements." },
              { icon: FaBalanceScale, title: "2. Community Review", text: "Transparent DAO voting ensures fair, unbiased project selection." },
              { icon: FaCoins, title: "3. Secure Funding", text: "Smart contract-based milestone payouts guarantee trust and accountability." }
            ].map((step, index) => (
              <MotionBox key={index} {...fadeInUp} transition={{ duration: 0.6, delay: index * 0.2 }}>
                <VStack p={8} borderRadius="2xl" bg="white" boxShadow="xl" textAlign="center">
                  <Flex bg="teal.500" p={5} borderRadius="full">
                    <step.icon size="36px" color="white" />
                  </Flex>
                  <Heading as="h3" size="lg" color="gray.900">
                    {step.title}
                  </Heading>
                  <Text fontSize="md" color="gray.600">
                    {step.text}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>

        {/* Sustainability at Creova Section */}
        <Container maxW="container.xl" py={20} textAlign="center">
          <Heading as="h2" size="xl" color="gray.900" mb={8}>
            Sustainability at Creova
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {[{ icon: FaChartLine, title: "Success-Based Platform Fees", text: "We only earn a small fee (2-5%) on successfully funded projects—no upfront costs, keeping creators first." },
              { icon: FaRocket, title: "Premium Memberships", text: "Optional memberships provide creators advanced analytics, resources, and priority access to funding." },
              { icon: FaHandshake, title: "Tokenised Revenue Sharing", text: "Creators can tokenise their future revenues, sharing a small percentage to sustain platform growth." },
              { icon: FaUsers, title: "DAO Treasury & Governance", text: "A decentralised DAO treasury manages Creova's long-term funding and development through transparent community governance." }
            ].map((item, index) => (
              <MotionBox key={index} p={8} borderRadius="2xl" bg="white" boxShadow="xl"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 * index }}>
                <VStack spacing={4}>
                  <Flex align="center" justify="center" bg="teal.500" borderRadius="full" width="60px" height="60px">
                    <item.icon size="28px" color="white" />
                  </Flex>
                  <Heading as="h3" size="md" color="gray.900" minH="56px">
                    {item.title}
                  </Heading>
                  <Text fontSize="md" color="gray.600" px={2}>
                    {item.text}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>

        {/* CTA Section */}
        <Container textAlign="center" mt={10}>
          <MotionBox {...fadeInUp}>
            <Button size="lg" colorScheme="teal" px={8} py={6} fontSize="xl" onClick={() => router.push("/funding")}>Apply for Funding</Button>
          </MotionBox>
        </Container>
      </Box>
      
      {/* Footer positioned outside main Box */}
      <Footer />
    </>
  );
}