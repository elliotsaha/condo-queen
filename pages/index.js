import Head from "next/head";
import firstStyles from "../styles/Homepage/firstSection.module.css"
import Button from "@material-ui/core/Button"
import Link from "next/link"
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
            <img src="/Homepage/cityTowers.png" alt="City Towers" className={firstStyles.image}/>
          </div>
        </div>
        <div className={firstStyles.textContainer}>
          <div className={firstStyles.text}>
            Find Your Dream Home
            <div className={firstStyles.buttonContainer}>
              <Link href="/contact" className={firstStyles.link}>
                <Button className={firstStyles.button}>Contact Us &rarr;</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
