import React from "react";
import { FaFacebookSquare, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-brookies-primary py-6 px-4 h-96">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 h-3/4">
        <div className="col-span-1 flex flex-col items-center justify-center lg:items-start">
          <h4 className="font-bold text-lg mb-7">Visit Us:</h4>
          <p className="mb-2 text-center lg:text-left">
            <strong>Brooki Fortitude Valley</strong>
            <br />
            15 Marshall Street, Fortitude Valley QLD 4006
          </p>
          <p className="text-center lg:text-left">
            <strong>Brooki Brisbane Airport</strong>
            <br />
            Gate 25, Brisbane Domestic Airport
          </p>
          <div className="flex justify-center lg:justify-start items-center mt-10 space-x-2 text-xl w-full">
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex justify-center lg:justify-start">
            <ul className="flex flex-wrap items-center gap-2 mt-5">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:underline">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#policy" className="hover:underline">
                  Policy
                </a>
              </li>
              <li>
                <a href="#getting-here" className="hover:underline">
                  Getting here
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-right space-y-4 h-full flex justify-end items-end mt-6 lg:mt-0">
            <div className="inline-block border border-brookies-primary px-4 py-2 rounded-md text-sm">
              <select
                name="currency"
                className="bg-transparent text-brookies-primary focus:outline-none cursor-pointer"
              >
                <option value="AUD">Australia (AUD $)</option>
                <option value="USD">United States (USD $)</option>
                <option value="EUR">Europe (EUR €)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-6 pt-4 text-center lg:text-left text-sm flex items-center lg:items-end h-1/4">
        <p>&copy; 2025 Brooki Bakehouse · Powered by Shopify</p>
      </div>
    </footer>
  );
};

export default Footer;
