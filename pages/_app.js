import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { ThemeProvider } from "next-themes";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { localhost, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import Layout from "../Components/Layout/index";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { chains, provider } = configureChains(
    [mainnet, localhost],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider attribute="class">
          <Layout>
            <GoogleAnalytics measurementId="G-W39YN28TNT" />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
