import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container";
import { FaStar } from "react-icons/fa";
import Reviews from "../Reviews";
import SideCards from "../CakeDetails/SideCards";
import { getCardsCandles } from "../../../Api/utils";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
const starCount = [1, 2, 3, 4, 5];

const MerchDetails = () => {
  const merchData = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
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
        <title>{merchData?.name}</title>
      </Helmet>
      <section className="flex flex-col lg:flex-row items-start justify-center">
        <div className="h-auto w-full">
          <div className="p-14">
            <img src={merchData?.image} alt="" className="rounded-xl" />
          </div>
          <div className="text-brookies-primary p-20 py-1 space-y-5 text-sm">
            <p>Store Policy</p>
            <p>
              Orders close every Monday at 6:00am for the week. If your chosen
              date is not available, we are fully booked. Please review your
              order carefully before placing it. Changes after placing an order
              will incur a $10 administration fee. No changes or cancellations
              can be made within 7 days of pickup.
            </p>
            <p>
              Before ordering, please read our{" "}
              <span className="underline cursor-pointer hover:text-brookies-secondary">
                terms and conditions of sale.
              </span>
            </p>
          </div>
        </div>

        <div className="text-brookies-primary h-auto w-full grid cols-span-1 pt-28">
          <div className="w-[20rem] place-self-center">
            <h1 className="text-3xl font-bold w-2/3">{merchData?.name}</h1>
            <p className="text-gray-600 flex items-center gap-2 text-sm">
              <span className="flex items-center">
                {starCount.map((star, idx) => (
                  <FaStar key={idx} className="text-brookies-secondary" />
                ))}
              </span>
              {`${merchData?.ratings} reviews`}
            </p>
            <p className="text-sm mt-8">{`$${merchData?.price} AUD`}</p>
            <p className="text-sm text-gray-500">Tax included.</p>
            <div className="text-sm my-8 mb-20 w-full">
              <p className="mt-4 w-[20rem]">
                Our exclusive merchandise collection is designed for those who
                appreciate style and quality. Limited edition pieces, crafted
                with the finest materials, to ensure comfort and durability.
              </p>
            </div>
            <button
              onClick={() => addToCart(cookieData?.id, "merch")}
              className="text-slate-100 bg-brookies-primary w-full rounded-lg py-3 px-4 hover:bg-brookies-secondary transition duration-150 ease-in-out"
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <Reviews ratings={merchData?.ratings} />
      <ToastContainer />
    </Container>
  );
};

export default MerchDetails;
