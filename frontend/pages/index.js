import { Box, Heading, Text, Button, VStack, Container, Image, SimpleGrid, Flex, Link, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaBolt, FaLock, FaUsers, FaDollarSign, FaCheckCircle, FaVoteYea, FaCoins } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const MotionBox = motion(Box);

export default function Home() {
    const router = useRouter();

    return (
<Flex
  direction="column"
  minH="100vh"
  bgGradient="linear(to-br, #14B8A6, #ffffff)"
  align="center"
  justify="space-between"
  textAlign="center"
  pt="70px"  // Adjust to navbar height (around 60px for half-height navbar)
>
            {/* Animated Hero Image */}
            <MotionBox
  width="100%"
  height="498px"
  overflow="hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <Image
    src="/hero-image.png"
    alt="Creova Hero"
    width="100%"
    height="100%"
    objectFit="cover"
    objectPosition="center"
  />
</MotionBox>

            {/* Main CTA */}
            <Container maxW="container.lg" my={6}>
                <VStack spacing={6}>
                    <Heading as="h1" size="2xl" fontWeight="extrabold" color="gray.900" lineHeight={1.2}>
                        Decentralised Funding for Creators
                    </Heading>
                    <Text fontSize="xl" color="gray.700" maxW="800px" lineHeight={1.6}>
                        Creova empowers creators and innovators with instant, decentralised financial support—no banks, no investors, just community.
                    </Text>
                    <HStack spacing={4}>
                        <Button
                            size="lg"
                            colorScheme="teal"
                            px={8}
                            py={6}
                            fontSize="xl"
                            onClick={() => router.push("/funding")}
                            _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
                        >
                            Apply for Funding
                        </Button>
                        <Button
                            size="lg"
                            colorScheme="gray"
                            px={8}
                            py={6}
                            fontSize="xl"
                            onClick={() => router.push("/dashboard")}
                            _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
                        >
                            Your Dashboard
                        </Button>
                    </HStack>
                </VStack>
            </Container>

            {/* Animated Sections */}
            {[{
                title: "How Creova Works",
                items: [
                    { icon: FaCheckCircle, title: "1. Apply", text: "Submit your project easily through our decentralised platform." },
                    { icon: FaVoteYea, title: "2. Community Voting", text: "The DAO community transparently reviews and votes on proposals." },
                    { icon: FaCoins, title: "3. Instant Funding", text: "Approved projects instantly receive secure blockchain payments." },
                ]
            }, {
                title: "What Makes Us Different?",
                items: [
                    { icon: FaBolt, title: "Instant Liquidity", text: "Immediate access to funds, eliminating traditional delays." },
                    { icon: FaUsers, title: "Community-Driven", text: "Democratic funding governed entirely by creators." },
                    { icon: FaDollarSign, title: "Zero Middlemen", text: "Direct, transparent funding—no hidden costs." },
                    { icon: FaLock, title: "Blockchain Secured", text: "Decentralised smart contracts protect your resources." },
                ]
            }].map((section, idx) => (
                <Container key={idx} maxW="container.xl" py={16}>
                    <Heading as="h2" size="xl" mb={12} color="gray.900">
                        {section.title}
                    </Heading>
                    <SimpleGrid columns={[1, null, section.items.length]} spacing={10}>
                        {section.items.map((item, index) => (
                            <MotionBox
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 * index }}
                            >
                                <VStack spacing={5} p={8} bg="white" borderRadius="2xl" boxShadow="xl"
                                    _hover={{ transform: "translateY(-4px)", shadow: "2xl" }}>
                                    <Box bg="teal.500" p={4} borderRadius="full">
                                        <item.icon size="48px" color="white" />
                                    </Box>
                                    <Heading as="h3" size="lg">{item.title}</Heading>
                                    <Text color="gray.600" lineHeight={1.6}>{item.text}</Text>
                                </VStack>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </Container>
            ))}

            {/* Original Contact Section */}
            <Container maxW="container.xl" py={20}>
                <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between"
                    bgGradient="linear(to-br, teal.400, teal.100)" borderRadius="2xl" p={10} boxShadow="2xl">
                    <Box textAlign={{ base: "center", md: "left" }}>
                        <Heading as="h2" size="xl" mb={4} color="gray.900">
                            Let's Build Your Vision
                        </Heading>
                        <Text fontSize="lg" color="gray.700" lineHeight={1.6}>
                            Have an idea or question? Reach out directly—we're here to help you create.
                        </Text>
                    </Box>
                    <Button colorScheme="teal" size="lg" px={10} as={Link} href="mailto:adam@creova.xyz"
                        _hover={{ transform: "translateY(-4px)", shadow: "xl" }} mt={{ base: 8, md: 0 }}>
                        Contact Creova
                    </Button>
                </Flex>
            </Container>

            <Box width="100%" mt="auto">
                <Footer />
            </Box>
        </Flex>
    );
}