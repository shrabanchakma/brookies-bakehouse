import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container";
import MerchFilter from "./MerchFilter";
import MerchFilterMobile from "./MerchFIlterMoblile";
import MerchItem from "./MerchItem";
import { Helmet } from "react-helmet-async";

const MerchPage = () => {
  const merch = useLoaderData();
  const [filters, setFilters] = useState({
    inStock: false,
    outOfStock: false,
    minPrice: null,
    maxPrice: null,
    sortBy: "",
  });

  const applySortingAndFiltering = () => {
    let sortedMerch = [...merch];

    if (filters.sortBy === "az") {
      sortedMerch.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === "za") {
      sortedMerch.sort((a, b) => b.name.localeCompare(a.name));
    } else if (filters.sortBy === "lowHigh") {
      sortedMerch.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "highLow") {
      sortedMerch.sort((a, b) => b.price - a.price);
    }

    return sortedMerch.filter((merch) => {
      if (filters.inStock && !merch.inStock) return false;
      if (filters.outOfStock && merch.inStock) return false;
      if (filters.minPrice !== null && merch.price < filters.minPrice)
        return false;
      if (filters.maxPrice !== null && merch.price > filters.maxPrice)
        return false;
      return true;
    });
  };

  const filteredMerch = applySortingAndFiltering();

  return (
    <Container>
      <Helmet>
        <title>Merch</title>
      </Helmet>
      <div className="mx-5 xl:mx-0 my-10">
        <h2 className="text-brookies-primary text-5xl font-bold py-8">Merch</h2>
        <p className="text-brookies-primary text-[14px]">
          Explore our exclusive Brookies merch collection!
        </p>
      </div>

      {/* Mobile Filter */}

      <MerchFilterMobile filters={filters} setFilters={setFilters} />

      <div className="w-full  min-h-screen mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-16">
          {filteredMerch.length > 0 ? (
            filteredMerch.map((merch) => (
              <MerchItem key={merch.id} merch={merch} />
            ))
          ) : (
            <p className="text-center text-brookies-primary mt-4">
              No merch found!
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default MerchPage;
