import Head from "next/head";
import Footer from "../components/Footer";
import HowItWorks from "../components/Howitworks";
import ModalScreen from "../components/modal";
import Header from "../components/Navbar";
import Slider from "../components/Slider";
import Whyus from "../components/Whyus";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Quescup</title>
        <meta name="description" content="Securing donors ny verify donation campaign" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <Slider />
      <Whyus/>
      <Footer/>
    </div>
  );
}
