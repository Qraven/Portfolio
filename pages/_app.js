import '../styles/globals.css'

import Head from "next/head";
import React from "react";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;