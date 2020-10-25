import Head from "next/head";
import axios from "axios";
import { createClient } from "contentful";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ height: "200vh" }}>hi</div>
    </div>
  );
}
