import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
const PickupDisclosure = (props) => {
  return (
    <div className=" px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl ">
        <Disclosure as="div" className="">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-lg xsm:text-2xl font-bold text-brookies-primary uppercase">
              Pickup
            </span>
            <FaChevronDown className="size-5 fill-brookies-primary group-data-[open]:rotate-180 transition duration-200 ease-out " />
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="mt-2 text-sm/5 text-white/50 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            <ul className="menu bg-brookies-secondary min-h-full w-2/5 space-y-2 text-brookies-primary text-base uppercase whitespace-nowrap ">
              <Link to="/collections/cakes">cakes</Link>
              <Link to="/collections/cookies">cookies</Link>
              <Link to="/collections/brownies">brownies</Link>
              <Link to="/collections/cupcakes">cupcakes</Link>
              <Link to="/collections/brownies">candles & cards</Link>
              <Link to="/collections/corporate-orders">corporate orders</Link>
            </ul>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
};

PickupDisclosure.propTypes = {};

export default PickupDisclosure;
