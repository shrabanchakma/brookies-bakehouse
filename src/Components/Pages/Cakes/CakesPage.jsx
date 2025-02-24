import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CakeItem from "./CakeItem";
import CakeFilter from "./CakeFilter";
import Container from "../../Shared/Container";

const CakesPage = () => {
  const cakes = useLoaderData();
  const [scrollY, setScrollY] = useState(0);
  const [filters, setFilters] = useState({
    inStock: false,
    outOfStock: false,
    minPrice: null,
    maxPrice: null,
    sortBy: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const applySortingAndFiltering = () => {
    let sortedCakes = [...cakes];

    if (filters.sortBy === "az") {
      sortedCakes.sort((a, b) => a.title.localeCompare(b.name));
    } else if (filters.sortBy === "za") {
      sortedCakes.sort((a, b) => b.title.localeCompare(a.name));
    } else if (filters.sortBy === "lowHigh") {
      sortedCakes.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "highLow") {
      sortedCakes.sort((a, b) => b.price - a.price);
    }

    return sortedCakes.filter((cake) => {
      if (filters.inStock && !cake.inStock) return false;
      if (filters.outOfStock && cake.inStock) return false;
      if (filters.minPrice !== null && cake.price < filters.minPrice)
        return false;
      if (filters.maxPrice !== null && cake.price > filters.maxPrice)
        return false;
      return true;
    });
  };

  const filteredCakes = applySortingAndFiltering();
  return (
    <Container>
      <div className="mx-auto px-4 py-8">
        <div className="mx-5 xl:mx-0 my-10 text-brookies-primary">
          <h2 className="text-5xl font-bold py-8">Cakes</h2>
          <p className="text-[14px]">
            Our cakes are made to order and available to pick-up in store. Shop
            our signature celebration cake range and celebrate with us!
          </p>
        </div>

        <CakeFilter filters={filters} setFilters={setFilters} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {filteredCakes.length > 0 ? (
            filteredCakes.map((cake, index) => (
              <CakeItem
                key={index}
                cake={cake}
                index={index}
                scrollY={scrollY}
              />
            ))
          ) : (
            <div className="col-span-2 text-center py-10">
              <p className="text-lg text-gray-500">
                No cakes available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CakesPage;
