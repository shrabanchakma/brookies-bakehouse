import React from "react";
import { FiDollarSign } from "react-icons/fi";

const CookiesFilter = ({
  filters,
  setFilters,
  inStockCount,
  outOfStockCount,
}) => {
  return (
    <section className="h-full px-5 py-10">
      <div className="mb-6 text-brookies-primary">
        <h3 className="mb-2 text-[14px]">Availability</h3>
        <div className="border border-b-0 border-brookies-primary mb-5"></div>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  inStock: !prev.inStock,
                }))
              }
              className="checkbox checkbox-xs rounded-none"
            />
            <span className="ml-2">{`In stock(${inStockCount})`}</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.outOfStock}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  outOfStock: !prev.outOfStock,
                }))
              }
              className="checkbox checkbox-xs rounded-none"
            />
            <span className="ml-2">{`Out of stock(${outOfStockCount})`}</span>
          </label>
        </div>
      </div>

      <div className="text-brookies-primary">
        <h3 className="mb-2 text-[14px]">Price</h3>
        <div className="border border-b-0 border-b-brookies-primary mb-5"></div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FiDollarSign />
            <input
              type="number"
              min="0"
              max={filters.maxPrice}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  minPrice: Number(e.target.value),
                }))
              }
              className="p-1 py-[0.3rem] rounded-md border border-brookies-primary w-20 focus:outline-2 focus:outline-brookies-primary text-[14px]"
              placeholder="From"
            />
          </div>
          <span>-</span>
          <div className="flex items-center">
            <FiDollarSign />
            <input
              type="number"
              min={filters.minPrice}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  maxPrice: Number(e.target.value),
                }))
              }
              className="p-1 py-[0.3rem] rounded-md border border-brookies-primary w-20 focus:outline-2 focus:outline-brookies-primary text-[14px]"
              placeholder="To"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesFilter;
