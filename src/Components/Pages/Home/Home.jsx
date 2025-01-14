import React from "react";
import Banner from "./Banner";
import Marquee from "./Marquee";
import CookiesSection from "./CookiesSection";
import Container from "../../Shared/Container";
import PostcardsSection from "./PostcardsSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Marquee />
      <Container>
        <CookiesSection />
        <PostcardsSection />
      </Container>
    </div>
  );
};

export default Home;
