import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container";
import CardsCandlesFilter from "./CardsCandlesFilter";
import CardsCandlesItem from "./CardsCandlesItem";
import { Helmet } from "react-helmet-async";

const CardsCandlesPage = () => {
  const items = useLoaderData();

  const inStockCount = items.filter((item) => item.inStock).length;
  const outOfStockCount = items.filter((item) => !item.inStock).length;

  const [filters, setFilters] = useState({
    inStock: false,
    outOfStock: false,
    minPrice: null,
    maxPrice: null,
    sortBy: "",
  });

  const applySortingAndFiltering = () => {
    let sortedItems = [...items];

    if (filters.sortBy === "az") {
      sortedItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filters.sortBy === "za") {
      sortedItems.sort((a, b) => b.title.localeCompare(a.title));
    } else if (filters.sortBy === "lowHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "highLow") {
      sortedItems.sort((a, b) => b.price - a.price);
    }

    return sortedItems.filter((item) => {
      if (filters.inStock && !item.inStock) return false;
      if (filters.outOfStock && item.inStock) return false;
      if (filters.minPrice !== null && item.price < filters.minPrice)
        return false;
      if (filters.maxPrice !== null && item.price > filters.maxPrice)
        return false;
      return true;
    });
  };

  const filteredItems = applySortingAndFiltering();

  return (
    <Container>
      <Helmet>
        <title>Candles & Cards</title>
      </Helmet>
      <div className="mx-5 xl:mx-0 my-10 text-brookies-primary">
        <h2 className=" text-5xl font-bold py-8">Cards & Candles</h2>
        <p className=" text-[14px]">
          Explore our unique collection of Cards & Candles!
        </p>
      </div>

      {/* Mobile Filter */}
      <CardsCandlesFilter
        filters={filters}
        setFilters={setFilters}
        inStockCount={inStockCount}
        outOfStockCount={outOfStockCount}
      />

      <div className="w-full min-h-screen mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-16">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <CardsCandlesItem key={item.id} item={item} />
            ))
          ) : (
            <p className="text-center  mt-4">No items found!</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CardsCandlesPage;
