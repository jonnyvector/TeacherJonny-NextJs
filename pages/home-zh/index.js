import MainNavigation from "../../components/layout-zh/Nav/MainNavigation";
import Wrapper from "../../components/ui/Wrapper";
import Hero from "../../components/Home-zh/Hero/Hero";
import Fun from "../../components/Home-zh/Fun/Fun";
import Hiw from "../../components/Home-zh/HowItWorks/Hiw";
import USP from "../../components/Home-zh/USP/USP";
import Testimonial from "../../components/Home-zh/Testimonial/Testimonial";
import Book from "../../components/Home-zh/Book/Book";
import Head from "next/head";
import FAQ from "../../components/Home-zh/FAQ/FAQ";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/tj.png" />
      </Head>
      <MainNavigation />
      <Wrapper>
        <Hero />
        <USP />
        <Fun />
        <Hiw />
      </Wrapper>
      <Testimonial />
      <Book />
      <FAQ />
      <Footer />
    </>
  );
}
//
