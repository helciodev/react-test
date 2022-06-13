import Head from "next/head";
import Banner from "../sections/Banner";
import ChooseAndCovert from "../sections/ChooseAndCovert";
import DownloadApp from "../sections/DownloadApp";
import Newsletter from "../sections/Newsletter";
import WhyUs from "../sections/WhyUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>B.th</title>
        <meta name='description' content='Generated by create next app' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Banner />
        <WhyUs />
        <ChooseAndCovert />
        <DownloadApp />
        <Newsletter />
      </main>
    </>
  );
}
