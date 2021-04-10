import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Next.js Template</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
