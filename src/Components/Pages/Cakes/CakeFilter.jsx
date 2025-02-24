import React, { useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineTune } from "react-icons/md";

const CakeFilter = ({ filters, setFilters }) => {
  const closeDrawer = () => {
    document.getElementById("cake-drawer").checked = false;
  };
  const [tempFilters, setTempFilters] = useState(filters);
  const { inStock, outOfStock, minPrice, maxPrice, sortBy } = filters;
  const showClearButton =
    inStock == true ||
    outOfStock == true ||
    minPrice != null ||
    maxPrice != null ||
    sortBy.length > 0;

  const applyFilters = () => {
    setFilters(tempFilters);
    document.getElementById("cake-drawer").checked = false;
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
    document.getElementById("cake-drawer").checked = false;
  };
  return (
    <div className="drawer text-brookies-primary">
      <input id="cake-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="cake-drawer"
          className="flex items-center cursor-pointer gap-2"
        >
          <MdOutlineTune size={20} /> <span>Filter & Sort</span>
        </label>
      </div>
      <div className="drawer-side z-10 ">
        <label htmlFor="cake-drawer" className="drawer-overlay"></label>
        <section className="h-full w-[18rem] xsm:w-[22rem] xl:w-[25rem] px-5  py-5 bg-brookies-secondary  ">
          <div
            onClick={closeDrawer}
            className="flex justify-start cursor-pointer"
          >
            <IoCloseOutline size={28} />
          </div>
          <h3 className="text-lg font-semibold mt-4">Sort By</h3>
          <div className="space-y-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="sort"
                value="az"
                checked={tempFilters.sortBy === "az"}
                onChange={() =>
                  setTempFilters((prev) => ({ ...prev, sortBy: "az" }))
                }
                className="peer hidden"
              />
              <div className="w-4 h-4 border-2 border-brookies-primary rounded-full flex items-center justify-center peer-checked:bg-brookies-primary peer-checked:border-transparent"></div>
              <span className="ml-2">Alphabetically (A-Z)</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="sort"
                value="za"
                checked={tempFilters.sortBy === "za"}
                onChange={() =>
                  setTempFilters((prev) => ({ ...prev, sortBy: "za" }))
                }
                className="peer hidden"
              />
              <div className="w-4 h-4 border-2 border-brookies-primary rounded-full flex items-center justify-center peer-checked:bg-brookies-primary peer-checked:border-transparent"></div>
              <span className="ml-2">Alphabetically (Z-A)</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="sort"
                value="lowHigh"
                checked={tempFilters.sortBy === "lowHigh"}
                onChange={() =>
                  setTempFilters((prev) => ({ ...prev, sortBy: "lowHigh" }))
                }
                className="peer hidden"
              />
              <div className="w-4 h-4 border-2 border-brookies-primary rounded-full flex items-center justify-center peer-checked:bg-brookies-primary peer-checked:border-transparent"></div>
              <span className="ml-2">Price (Low to High)</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="sort"
                value="highLow"
                checked={tempFilters.sortBy === "highLow"}
                onChange={() =>
                  setTempFilters((prev) => ({ ...prev, sortBy: "highLow" }))
                }
                className="peer hidden"
              />
              <div className="w-4 h-4 border-2 border-brookies-primary rounded-full flex items-center justify-center peer-checked:bg-brookies-primary peer-checked:border-transparent"></div>
              <span className="ml-2">Price (High to Low)</span>
            </label>
          </div>
          <div className="text-brookies-primary">
            <h3 className="pb-2 text-[14px]">Price</h3>
            <div className="border border-b-0 border-brookies-primary mb-5 "></div>
            <div className="flex items-center space-x-4  min-h-[3rem]">
              <div className="flex items-center">
                <FiDollarSign />
                <input
                  type="number"
                  max={tempFilters.maxPrice}
                  value={tempFilters.minPrice ?? ""}
                  onChange={(e) =>
                    setTempFilters((prev) => ({
                      ...prev,
                      minPrice: Number(e.target.value),
                    }))
                  }
                  className="p-1 py-[0.3rem] rounded-md border border-brookies-primary w-20 focus:outline-none focus:border-2 focus:border-brookies-primary text-[14px]  bg-brookies-secondary focus:outline-offset-brookies-primary placeholder-brookies-primary "
                  placeholder="From"
                />
              </div>
              <span>-</span>
              <div className="flex items-center">
                <FiDollarSign />
                <input
                  type="number"
                  min={tempFilters.minPrice}
                  value={tempFilters.maxPrice ?? ""}
                  onChange={(e) =>
                    setTempFilters((prev) => ({
                      ...prev,
                      maxPrice: Number(e.target.value) || null,
                    }))
                  }
                  className="p-1 py-[0.3rem] rounded-md border border-brookies-primary w-20 focus:outline-none focus:border-2 focus:border-brookies-primary text-[14px]  bg-brookies-secondary focus:outline-offset-brookies-primary  placeholder-brookies-primary"
                  placeholder="To"
                />
              </div>
            </div>
          </div>
          <div className="mt-20 w-full  flex justify-center gap-2">
            <button
              onClick={applyFilters}
              className="w-11/12 py-3 bg-brookies-primary text-brookies-secondary text-[14px] rounded-md"
            >
              Apply
            </button>
            <button
              onClick={clearFilters}
              className={`w-11/12 py-3 border border-brookies-primary text-brookies-primary   bg-brookies-secondary text-[14px] rounded-md ${
                !showClearButton && "hidden"
              }`}
            >
              Clear
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CakeFilter;
