import { Box, Flex, Text, Link, Stack, Icon } from "@chakra-ui/react";
import { FaTwitter, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      bgGradient="linear(to-r, #14B8A6, #FFFFFF)"
      color="black"
      py={10}
      width="100%"
      boxShadow="none" // Removed shadow for cleaner look
      mt="auto"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.xl"
        mx="auto"
        px={8}
      >
        {/* Branding and Tagline */}
        <Box textAlign={{ base: "center", md: "left" }} mb={{ base: 6, md: 0 }}>
          <Text fontSize="2xl" fontWeight="bold">
            Creova
          </Text>
          <Text fontSize="md">
            Empowering Creators to Own Their Future.
          </Text>
        </Box>

        {/* Social Media Icons with enhanced hover effects */}
        <Stack direction="row" spacing={6}>
          <Link href="https://twitter.com/yourusername" isExternal>
            <Icon as={FaTwitter} boxSize={6} _hover={{ color: "teal.700", transform: "translateY(-3px)" }} transition="0.2s ease" />
          </Link>
          <Link href="https://discord.com/invite/yourserver" isExternal>
            <Icon as={FaDiscord} boxSize={6} _hover={{ color: "teal.700", transform: "translateY(-3px)" }} transition="0.2s ease" />
          </Link>
          <Link href="https://github.com/yourrepo" isExternal>
            <Icon as={FaGithub} boxSize={6} _hover={{ color: "teal.700", transform: "translateY(-3px)" }} transition="0.2s ease" />
          </Link>
          <Link href="https://linkedin.com/company/yourcompany" isExternal>
            <Icon as={FaLinkedin} boxSize={6} _hover={{ color: "teal.700", transform: "translateY(-3px)" }} transition="0.2s ease" />
          </Link>
        </Stack>
      </Flex>

      {/* Legal Information Row */}
      <Flex
        justify="space-between"
        align="center"
        maxW="container.xl"
        mx="auto"
        px={8}
        pt={6}
        mt={8}
        borderTop="1px solid"
        borderColor="gray.200"
        direction={{ base: "column", md: "row" }}
      >
        <Text fontSize="sm">
          © {new Date().getFullYear()} Creova. All rights reserved.
        </Text>
        <Stack direction="row" spacing={4} mt={{ base: 4, md: 0 }}>
          <Link href="/privacy" fontSize="sm" _hover={{ color: "teal.500" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" fontSize="sm" _hover={{ color: "teal.500" }}>
            Terms of Use
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}