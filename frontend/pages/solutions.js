import { Box, Heading, Text, Container, VStack, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaBolt, FaUsers, FaDollarSign, FaCheckCircle, FaGlobe, FaChartLine } from "react-icons/fa";
import Footer from '../components/Footer';

export default function Solutions() {
    const router = useRouter();

    return (
        <>
            <Box minH="100vh" bgGradient="linear(to-br, #14B8A6, #ffffff)" py={20} pt={28}>
                {/* Hero Section */}
                <Container maxW="container.lg" textAlign="center" mb={16}>
                    <Heading as="h1" size="2xl" fontWeight="bold" color="gray.900">
                        The Future of Creator Funding Starts Here
                    </Heading>
                    <Text fontSize="lg" color="gray.700" mt={4} maxW="800px" mx="auto">
                        Say goodbye to slow approvals, high-interest loans, and predatory investors. Creova redefines how creators access funding—decentralised, instant, and fair.
                    </Text>
                </Container>

                {/* Core Solutions Section */}
                <Container maxW="container.xl" py={16}>
                    <Heading as="h2" size="xl" textAlign="center" mb={10} color="gray.900">
                        Why Choose Creova?
                    </Heading>
                    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                        {[
                            { icon: FaBolt, title: "Instant Funding", text: "Immediate access to funds via blockchain-based smart contracts." },
                            { icon: FaUsers, title: "Community-Backed", text: "Transparent, democratic decisions made by creators, not gatekeepers." },
                            { icon: FaDollarSign, title: "No Debt or Equity Loss", text: "Keep full ownership without loans or equity dilution." },
                            { icon: FaCheckCircle, title: "Transparent & Secure", text: "On-chain processes guarantee security and full transparency." },
                            { icon: FaGlobe, title: "Global Accessibility", text: "Open to creators worldwide, breaking traditional barriers." },
                            { icon: FaChartLine, title: "Tokenised Revenue", text: "Innovative revenue-sharing models that empower creators financially." }
                        ].map((solution, index) => (
                            <VStack key={index} p={8} borderRadius="2xl" bg="white" boxShadow="2xl" textAlign="center" spacing={5}>
                                <Flex align="center" justify="center" bg="teal.500" borderRadius="full" width="70px" height="70px">
                                    <solution.icon size="36px" color="white" />
                                </Flex>
                                <Heading as="h3" size="lg" color="gray.900">{solution.title}</Heading>
                                <Text fontSize="md" color="gray.600">{solution.text}</Text>
                            </VStack>
                        ))}
                    </SimpleGrid>
                </Container>

                {/* Call-to-Action */}
                <Container maxW="container.md" textAlign="center" mt={10}>
                    <Button size="lg" colorScheme="teal" px={8} py={6} fontSize="xl" onClick={() => router.push("/funding")}>
                        Apply for Funding Now
                    </Button>
                </Container>
            </Box>

            {/* Footer outside Box to ensure it sits correctly at the bottom */}
            <Footer />
        </>
    );
}
