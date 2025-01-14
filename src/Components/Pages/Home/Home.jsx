import React from "react";
import Banner from "./Banner";
import Marquee from "./Marquee";
import CookiesSection from "./CookiesSection";
import Container from "../../Shared/Container";

const Home = () => {
  return (
    <div>
      <Banner />
      <Marquee />
      <Container>
        <CookiesSection />
      </Container>
    </div>
  );
};

export default Home;
