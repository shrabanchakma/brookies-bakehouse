import React from "react";
import PropTypes from "prop-types";
import { useLoaderData, useNavigation } from "react-router-dom";
import Container from "../../Shared/Container";
import CookiesFilter from "./CookiesFilter";

const CookiesPage = (props) => {
  const cookies = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <div className="text-center my-8">Loading...</div>;
  }

  return (
    <Container>
      <div className="my-10">
        <h2 className="text-brookies-primary text-5xl font-bold py-8">
          Delivery
        </h2>
        <p className="text-brookies-primary text-[14px]">
          Shop our baked fresh daily cookies delivered to your door! <br />{" "}
          Shipped Australia wide and to select countries worldwide. See where we
          ship.
        </p>
      </div>
      <div className="flex items-start w-full  h-[90rem] bg-green-500">
        <div className="w-1/6  h-[50rem] sticky top-0">
          <CookiesFilter />
        </div>
        <div className="w-5/6 bg-orange-100 min-h-screen">cookies</div>
      </div>
    </Container>
  );
};

CookiesPage.propTypes = {};

export default CookiesPage;
