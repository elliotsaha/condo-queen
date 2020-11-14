import Head from "next/head";
import firstStyles from "../styles/Homepage/firstSection.module.css";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import secoundStyles from "../styles/Homepage/secoundSection.module.css";
import Card from "../components/Card";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage | Condo Queen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*First Section of Homepage*/}
      <div className={firstStyles.root}>
        <div className={firstStyles.imageContainer}>
          <div className={firstStyles.imageOuter}>
            <img
              src="/Homepage/cityTowers.png"
              alt="City Towers"
              className={firstStyles.image}
            />
          </div>
        </div>
        <div className={firstStyles.textContainer}>
          <div className={firstStyles.text}>
            Find Your Dream Home
            <div className={firstStyles.buttonContainer}>
              <Link href="/contact" className={firstStyles.link}>
                <Button className={firstStyles.button}>
                  Contact Us &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*3 Cards Section*/}
      <div className={secoundStyles.root}>
        <div className={secoundStyles.title}>
          The Toronto Condo Queen is dedicated to providing you with the best
          experience in real estate services.
        </div>
        <div>
          <Card image={"/test.jpg"} header={"Lorem"} description={"Lorem Ipsummmmmmmmawdmamwd aw m madwm amw dma mwdam dawmd mawdm awmd awm dmwadm awmd wamd amw dmawm dawm dawmd"}/>
        </div>
        <div className={secoundStyles.imageContainer}>
          <img src="/Homepage/glass.png" className={secoundStyles.image} />
        </div>
      </div>
    </div>
  );
}
