import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ForDeliveryDisclosure = (props) => {
  return (
    <div className=" w-full  px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl ">
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-lg xsm:text-2xl font-bold text-brookies-primary   uppercase">
              For Delivery
            </span>
            <FaChevronDown className="size-5 fill-brookies-primary group-data-[open]:rotate-180 transition duration-200 ease-out " />
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="mt-2 text-sm/5 text-white/50 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            <ul className="menu bg-brookies-secondary min-h-full w-2/5 space-y-2 text-brookies-primary text-lg">
              <Link to="/collections/cookies" className="uppercase ">
                cookies
              </Link>
              <Link to="/collections/brownies" className="uppercase ">
                brownies
              </Link>

              <Link to="/collections/brownies" className="uppercase ">
                merch
              </Link>
              <Link
                to="/collections/brownies"
                className="uppercase whitespace-nowrap"
              >
                cards & candles
              </Link>
            </ul>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
};

ForDeliveryDisclosure.propTypes = {};

export default ForDeliveryDisclosure;
