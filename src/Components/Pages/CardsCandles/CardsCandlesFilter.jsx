import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineTune } from "react-icons/md";

const CardsCandlesFilter = ({
  filters,
  setFilters,
  inStockCount,
  outOfStockCount,
}) => {
  const closeDrawer = () => {
    document.getElementById("cards-candles-drawer").checked = false;
  };
  const [tempFilters, setTempFilters] = useState(filters);
  const { inStock, outOfStock, minPrice, maxPrice, sortBy } = filters;
  const showClearButton =
    inStock ||
    outOfStock ||
    minPrice !== null ||
    maxPrice !== null ||
    sortBy.length > 0;

  const applyFilters = () => {
    setFilters(tempFilters);
    closeDrawer();
  };

  const clearFilters = () => {
    const defaultFilters = {
      inStock: false,
      outOfStock: false,
      minPrice: null,
      maxPrice: null,
      sortBy: "",
    };
    setFilters(defaultFilters);
    setTempFilters(defaultFilters);
    closeDrawer();
  };

  return (
    <div className="drawer">
      <input
        id="cards-candles-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <label
          htmlFor="cards-candles-drawer"
          className="text-brookies-primary flex items-center font-normal uppercase cursor-pointer gap-2"
        >
          <MdOutlineTune size={20} /> <span>Filter & Sort</span>
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="cards-candles-drawer"
          className="drawer-overlay"
        ></label>
        <section className="h-full w-[22rem] px-5 py-5 bg-brookies-secondary text-brookies-primary">
          <div
            onClick={closeDrawer}
            className="flex justify-start  cursor-pointer"
          >
            <IoCloseOutline size={28} />
          </div>
          <div className="mt-6 ">
            <h3 className="pb-2 text-[14px]">Sort By</h3>
            <div className="border border-b-0 border-brookies-primary mb-5"></div>
            {[
              { label: "Alphabetically (A-Z)", value: "az" },
              { label: "Alphabetically (Z-A)", value: "za" },
              { label: "Price (Low to High)", value: "lowHigh" },
              { label: "Price (High to Low)", value: "highLow" },
            ].map(({ label, value }) => (
              <label key={value} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  value={value}
                  checked={tempFilters.sortBy === value}
                  onChange={() =>
                    setTempFilters((prev) => ({ ...prev, sortBy: value }))
                  }
                  className="peer hidden"
                />
                <div className="w-4 h-4 border-2 border-brookies-primary rounded-full flex items-center justify-center peer-checked:bg-brookies-primary peer-checked:border-transparent"></div>
                <span className="ml-2">{label}</span>
              </label>
            ))}
          </div>

          <div className=" mt-5">
            <h3 className="pb-2 text-[14px]">Price</h3>
            <div className="border border-b-0 border-brookies-primary mb-5"></div>
            <div className="flex items-center space-x-4 min-h-[3rem]">
              <div className="flex items-center">
                <FiDollarSign />
                <input
                  type="number"
                  max={tempFilters.maxPrice ?? ""}
                  value={tempFilters.minPrice ?? ""}
                  onChange={(e) =>
                    setTempFilters((prev) => ({
                      ...prev,
                      minPrice: Number(e.target.value),
                    }))
                  }
                  className="p-1 rounded-md border border-brookies-primary w-20 focus:outline-none focus:border-2 focus:border-brookies-primary text-[14px] bg-brookies-secondary placeholder-brookies-primary"
                  placeholder="From"
                />
              </div>
              <span>-</span>
              <div className="flex items-center">
                <FiDollarSign />
                <input
                  type="number"
                  min={tempFilters.minPrice ?? ""}
                  value={tempFilters.maxPrice ?? ""}
                  onChange={(e) =>
                    setTempFilters((prev) => ({
                      ...prev,
                      maxPrice: Number(e.target.value) || null,
                    }))
                  }
                  className="p-1 rounded-md border border-brookies-primary w-20 focus:outline-none focus:border-2 focus:border-brookies-primary text-[14px] bg-brookies-secondary placeholder-brookies-primary"
                  placeholder="To"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 w-full flex justify-center gap-2">
            <button
              onClick={applyFilters}
              className="w-11/12 py-3 bg-brookies-primary text-brookies-secondary text-[14px] rounded-md"
            >
              Apply
            </button>
            {showClearButton && (
              <button
                onClick={clearFilters}
                className="w-11/12 py-3 border border-brookies-primary  bg-brookies-secondary text-[14px] rounded-md"
              >
                Clear
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsCandlesFilter;
