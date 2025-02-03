import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Container from "../../Shared/Container";
import CookiesFilter from "./CookiesFilter";
import Cookie from "./Cookie";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const CookiesPage = () => {
  const cookies = useLoaderData();
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: null,
    inStock: false,
    outOfStock: false,
  });

  if (navigation.state === "loading") {
    return <div className="text-center my-8">Loading...</div>;
  }

  const filteredCookies = cookies.filter((cookie) => {
    const isMinSet = filters.minPrice !== null;
    const isMaxSet = filters.maxPrice !== null;

    const priceMatch =
      (!isMinSet || cookie.price >= filters.minPrice) &&
      (!isMaxSet || cookie.price <= filters.maxPrice);

    const stockMatch =
      (filters.inStock && cookie.inStock) ||
      (filters.outOfStock && !cookie.inStock) ||
      (!filters.inStock && !filters.outOfStock);
    return priceMatch && stockMatch;
  });

  const totalPages = Math.ceil(filteredCookies.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCookies = filteredCookies.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

      <div className="flex items-start w-full">
        <div className="w-1/6 h-[25rem] sticky top-0">
          <CookiesFilter filters={filters} setFilters={setFilters} />
        </div>

        <div className="w-5/6 min-h-screen mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-2 xl:gap-0 mt-16">
            {currentCookies.length > 0 ? (
              currentCookies.map((cookie) => (
                <Cookie key={cookie.id} cookie={cookie} />
              ))
            ) : (
              <p className="text-center text-brookies-primary mt-4">
                No cookies found!
              </p>
            )}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`flex justify-end items-center mx-1 ${
                currentPage === 1 && "invisible"
              }`}
            >
              <LuArrowLeft size={25} />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`text-brookies-primary mx-1 ${
                    currentPage === index + 1
                      ? "border-b-[1px] border-b-brookies-primary px-2"
                      : "px-2"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`flex justify-end items-center mx-1  ${
                currentPage === totalPages && "invisible"
              }`}
            >
              <LuArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CookiesPage;
