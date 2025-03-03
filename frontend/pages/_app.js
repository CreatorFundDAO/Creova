import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "../lib/wagmiConfig";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import Navbar from "../components/Navbar";
import Head from "next/head";
import "@rainbow-me/rainbowkit/styles.css";
import customChakraTheme from "../styles/theme"; // ✅ Import your Chakra UI custom theme

const queryClient = new QueryClient();

const customRainbowKitTheme = lightTheme({
  accentColor: "#14B8A6",
  accentColorForeground: "#FFFFFF",
  borderRadius: "medium",
  fontStack: "system",
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customChakraTheme}> {/* ✅ Inject Chakra custom theme */}
      <Head>
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <title>Creova - Decentralised Creator Funding</title>
      </Head>
      <WagmiConfig config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={customRainbowKitTheme} coolMode>
            <Navbar />
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;