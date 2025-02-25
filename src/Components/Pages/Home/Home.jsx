import React, { useEffect } from "react";
import Banner from "./Banner";
import Marquee from "./Marquee";
import CookiesSection from "./CookiesSection";
import Container from "../../Shared/Container";
import PostcardsSection from "./PostcardsSection";
import MerchSection from "../Merch/MerchSection";
import Carousel from "./Carousel";
import ClassesSection from "./ClassesSection";
import FeaturedSection from "./FeaturedSection";
import VisitUsSection from "./VisitUsSection";

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
      <Carousel />
      <Container>
        <ClassesSection />
        <FeaturedSection />
      </Container>
      <VisitUsSection />
    </div>
  );
};

export default Home;
