import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";
import ForDeliveryDisclosure from "../../Shared/ForDeliveryDisclosure";
import PickupDisclosure from "../../Shared/PickupDisclosure";
import { Link } from "react-router-dom";
import { FiDollarSign, FiSearch } from "react-icons/fi";
import { MdOutlineTune } from "react-icons/md";
import "./CookiesFilterMobile.css";
const CookiesFilterMobile = ({
  filters,
  setFilters,
  inStockCount,
  outOfStockCount,
}) => {
  const closeDrawer = () => {
    document.getElementById("my-drawer-4").checked = false;
  };
  const [tempFilters, setTempFilters] = useState(filters);

  const applyFilters = () => {
    setFilters(tempFilters);
    document.getElementById("my-drawer-4").checked = false;
  };
  return (
    <div className="drawer z-50">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="text-brookies-primary mx-5 flex items-center font-normal uppercase  cursor-pointer gap-2 lg:hidden"
        >
          <MdOutlineTune size={20} /> <span>Filter</span>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <section className="h-full w-[18rem] xsm:w-[22rem] px-5  py-5 bg-brookies-secondary">
          <div
            onClick={closeDrawer}
            className="flex justify-start  hover:cursor-pointer text-brookies-primary"
          >
            <IoCloseOutline size={28} />
          </div>
          <div className="mb-6 mt-7 text-brookies-primary">
            <h3 className="mb-2 text-[14px]">Availability</h3>
            <div className="border border-b-0 border-brookies-primary mb-5"></div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={tempFilters.inStock}
                  onChange={() =>
                    setTempFilters((prev) => ({
                      ...prev,
                      inStock: !prev.inStock,
                    }))
                  }
                  className="checkbox checkbox-xs rounded-none [--chkbg:theme(colors.brookies-primary)]"
                />
                <span className="ml-2">{`In stock(${inStockCount})`}</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={tempFilters.outOfStock}
                  onChange={() =>
                    setTempFilters((prev) => ({
                      ...prev,
                      outOfStock: !prev.outOfStock,
                    }))
                  }
                  className="checkbox checkbox-xs rounded-none [--chkbg:theme(colors.brookies-primary)]"
                />
                <span className="ml-2">{`Out of stock(${outOfStockCount})`}</span>
              </label>
            </div>
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
                  defaultValue={""}
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
                  defaultValue={tempFilters.maxPrice ?? ""}
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

          <div className="mt-20 w-full  flex justify-center">
            <button
              onClick={applyFilters}
              className="w-11/12 py-3 bg-brookies-primary text-brookies-secondary text-[14px] rounded-md"
            >
              Apply
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

CookiesFilterMobile.propTypes = {};

export default CookiesFilterMobile;
