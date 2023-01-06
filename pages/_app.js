import Layout from "../Components/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <GoogleAnalytics measurementId="G-W39YN28TNT" />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
