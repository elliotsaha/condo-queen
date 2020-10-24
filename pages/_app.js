import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>hi</div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
