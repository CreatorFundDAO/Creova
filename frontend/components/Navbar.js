import { Box, Flex, Button, Link, Image, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { px } from "framer-motion";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();

    const navBg = useColorModeValue("linear(to-r, #14B8A6, #FFFFFF)", "#27272A");
    const navColor = useColorModeValue("black", "white");
    const hoverBg = useColorModeValue("teal.500", "teal.300");

    return (
<Box
  bgGradient="linear(to-r, #14B8A6, #FFFFFF)"
  px={8}
  py={4} // adjust this for centering
  position="fixed"
  top="0"
  width="100%"
  height="70px"
zIndex="100"
  boxShadow="none"
  borderBottom="none"
  border="none"
>
            <Flex align="center" justify="space-between">
                {/* Logo */}
                <Link href="/" position="relative">
                    <Image
                        src="/logo.png"
                        alt="Creova Logo"
                        height="135px"
                        maxWidth="480px"
                        objectFit="contain"
                        position="absolute"
                        top="50%"
                        left="0"
                        transform="translateY(-50%)"
                    />
                </Link>

                {/* Navigation Links */}
                <Flex gap={6} align="center">
                    {[
  { name: "Our Solutions", path: "/solutions" },
  { name: "About Creova", path: "/about" },
  { name: "Funding", path: "/funding" },
  { name: "User Dashboard", path: "/dashboard" },
  { name: "Transparency", path: "/transparency" },
].map((link) => (
                        <Button
                            key={link.name}
                            color={navColor}
                            fontSize="lg"
                            fontWeight="bold"
                            variant="ghost"
                            _hover={{ bg: hoverBg, color: "white", transform: "scale(1.05)" }}
                            onClick={() => router.push(link.path)}
                        >
                            {link.name}
                        </Button>
                    ))}

                    {/* Connect Wallet (RainbowKit) */}
                    <ConnectButton
                        showBalance={false}
                        chainStatus="none"
                        accountStatus="address"
                    />

                    {/* Dark Mode Toggle */}
                    <IconButton
                        aria-label="Toggle theme"
                        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        onClick={toggleColorMode}
                        color={navColor}
                        _hover={{ bg: hoverBg, transform: "scale(1.1)", color: "white" }}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;