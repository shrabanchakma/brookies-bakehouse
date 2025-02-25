import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaBox, FaStar } from "react-icons/fa";
import { CiCircleQuestion, CiHeart } from "react-icons/ci";
import Container from "../../Shared/Container";
import SideCards from "../CakeDetails/SideCards";
import Reviews from "../Reviews";
import { getCardsCandles } from "../../../Api/utils";
import { Helmet } from "react-helmet-async";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
const starCount = [1, 2, 3, 4, 5];
const flavorOptions = [
  "Chocolate Chip",
  "Oatmeal Raisin",
  "Peanut Butter",
  "Sugar Cookie",
  "Double Chocolate",
];
const addOnsOptions = [
  "No Extras",
  "Extra Chocolate Chips",
  "Nuts Mix",
  "Caramel Drizzle",
  "White Chocolate Drizzle",
];
const packagingOptions = ["Box of 6", "Box of 12", "Box of 24"];

const CookieDetails = () => {
  const cookieData = useLoaderData();
  const [cardsCandles, setCardsCandles] = useState([]);
  const getCardsCandlesData = async () => {
    try {
      const cardsCandlesData = await getCardsCandles();
      setCardsCandles(cardsCandlesData.slice(0, 4));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getCardsCandlesData();
  }, []);
  const addToCart = (id, type) => {
    let cart = Cookies.get("cart")
      ? JSON.parse(Cookies.get("cart"))
      : { cookies: [], cakes: [], merch: [], cards: [] };

    if (!cart[type].includes(id)) {
      cart[type].push(id);
      Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
      toast.success("Added to Cart!");
    } else {
      toast.error("Item is already in the cart");
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Brookies Cookies 🍪</title>
      </Helmet>
      <section className="flex flex-col lg:flex-row items-start justify-center text-brookies-primary">
        <div className="h-auto w-full">
          <div className="p-14">
            <img src={cookieData?.images[0]} alt="" className="rounded-xl" />
          </div>
          <div className=" p-20 py-1 space-y-5 text-sm">
            <p>Store Policy</p>
            <p>
              Orders for fresh cookies must be placed at least 48 hours in
              advance. If your chosen date is unavailable, we are fully booked.
              Please double-check your order before placing it. Any changes or
              cancellations are subject to a $5 administration fee. Within 3
              days of pickup, we are unable to accept modifications to your
              order.
            </p>
            <p>
              Before ordering, please review our
              <span className="underline cursor-pointer hover:text-secondary">
                {" "}
                terms and conditions of sale.
              </span>
            </p>
          </div>
        </div>

        <div className=" h-auto w-full grid cols-span-1 pt-28">
          <div className="w-[20rem] place-self-center">
            <h1 className="text-3xl font-bold w-2/3">{cookieData?.name}</h1>
            <p className="text-gray-600 flex items-center gap-2 text-sm">
              <span className="flex items-center">
                {starCount.map((star, idx) => (
                  <FaStar key={idx} className="text-brookies-secondary" />
                ))}
              </span>
              {`${cookieData?.ratings} reviews`}
            </p>
            <p className="text-sm mt-8">{`$${cookieData?.price} AUD`}</p>
            <p className="text-sm text-gray-500">Tax included.</p>
            <div className="text-sm my-8 mb-20 w-full">
              <p className="mt-4 w-[20rem]">
                Our gourmet cookies are baked fresh with high-quality
                ingredients, perfect for any occasion. Choose your favorite
                flavors and add-ons to create a personalized treat box.
              </p>
            </div>

            <div className="my-6 space-y-4 w-full">
              <div className="space-y-1">
                <p>Flavor:</p>
                <select className="select w-full max-w-xs focus:outline-none rounded-none border-1 border-brookies-primary">
                  <option disabled>Select Cookie Flavor</option>
                  {flavorOptions.map((flavor, index) => (
                    <option key={index}>{flavor}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <p>Add-Ons:</p>
                <select className="select w-full max-w-xs focus:outline-none rounded-none border-1 border-brookies-primary">
                  <option disabled>Select Add-Ons</option>
                  {addOnsOptions.map((addOn, index) => (
                    <option key={index}>{addOn}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <p>Packaging:</p>
                <select className="select w-full max-w-xs focus:outline-none rounded-none border-1 border-brookies-primary">
                  <option disabled>Select Packaging</option>
                  {packagingOptions.map((pack, index) => (
                    <option key={index}>{pack}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => addToCart(cookieData?.id, "cookies")}
                className="text-white bg-brookies-primary  w-full rounded-lg py-3 px-4 hover:bg-brookies-secondary transition duration-150 ease-in-out"
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="w-[20rem] place-self-center">
            <div className="collapse border-b-[1px] rounded-none">
              <input type="checkbox" />
              <div className="collapse-title text-sm font-bold flex items-center gap-1">
                <CiCircleQuestion size={20} />
                <span>Storage Tips</span>
              </div>
              <div className="collapse-content">
                <p>
                  Store cookies in an airtight container at room temperature for
                  up to 5 days, or refrigerate for up to 2 weeks.
                </p>
              </div>
            </div>
            <div className="collapse border-b-[1px] rounded-none ">
              <input type="checkbox" />
              <div className="collapse-title text-sm font-bold flex items-center gap-1">
                <FaBox size={15} />
                <span>Pick Up Info</span>
              </div>
              <div className="collapse-content">
                <p>
                  Pick-up is available Wednesday to Saturday during our store
                  hours. Orders must be placed 48 hours in advance. If your
                  desired date is unavailable, we are fully booked.
                </p>
              </div>
            </div>
            <div className="collapse border-b-[1px] rounded-none ">
              <input type="checkbox" />
              <div className="collapse-title text-sm font-bold flex items-center gap-1">
                <CiHeart size={20} />
                <span>Allergens</span>
              </div>
              <div className="collapse-content">
                <p>
                  Contains gluten, eggs, dairy, and may contain traces of nuts.
                </p>
              </div>
            </div>
          </div>

          <SideCards cardsCandles={cardsCandles} />
        </div>
      </section>
      <Reviews ratings={cookieData?.ratings} />
      <ToastContainer />
    </Container>
  );
};

export default CookieDetails;
