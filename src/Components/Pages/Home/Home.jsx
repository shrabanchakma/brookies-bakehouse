import React from "react";
import Banner from "./Banner";
import Marquee from "./Marquee";
import CookiesSection from "./CookiesSection";
import Container from "../../Shared/Container";
import PostcardsSection from "./PostcardsSection";
import MerchSection from "../Merch/MerchSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Marquee />
      <Container>
        <CookiesSection />
        <MerchSection />
        <PostcardsSection />
      </Container>
    </div>
  );
};

export default Home;
