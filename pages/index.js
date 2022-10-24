import MainNavigation from "../components/layout/Nav/MainNavigation";

import Wrapper from "../components/ui/Wrapper";
import Hero from "../components/Home/Hero/Hero";
import Fun from "../components/Home/Fun/Fun";
import Hiw from "../components/Home/HowItWorks/Hiw";
import USP from "../components/Home/USP/USP";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import Book from "../components/Home/Book/Book";

import Head from "next/head";

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
    </>
  );
}
//
