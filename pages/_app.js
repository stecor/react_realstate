import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Nprogress from "nprogress";
import Layout from "../components/Layout";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </React.Fragment>
  );
}

export default MyApp;
