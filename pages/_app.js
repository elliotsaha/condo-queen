import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../components/Navbar";
import { StylesProvider } from '@material-ui/core/styles';
import "../styles/MUITextFields.css"
export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <StylesProvider injectFirst>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
      </StylesProvider>
  );
}
