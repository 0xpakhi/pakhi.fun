import "@/styles/globals.css";
// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
          <Head>
        <title>pakhi.fun</title>
        <link rel="shortcut icon" href="pakhi.png" />
        <meta
          name="description"
          content="crafting the craft — engg + design"
          key="desc"
        />
        <meta property="og:title" content="pakhi" />
        <meta
          property="og:image"
          content="https://i.ibb.co/PFtW6Fy/enhanced-1.png"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://pakhi.fun/" key="twt-url" />
        <meta name="twitter:title" content="pakhi" key="twt-title" />
        <meta
          name="twitter:description"
          content="crafting the craft — engg + design"
          key="twt-desc"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/PFtW6Fy/enhanced-1.png"
          key="twt-img"
        />
      </Head>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  );
}

export default MyApp;
