import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container";
import { FaStar } from "react-icons/fa";
import Reviews from "../Reviews";

const starCount = [1, 2, 3, 4, 5];

const CardsCandleDetails = () => {
  const candleData = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <section className="flex flex-col lg:flex-row items-start justify-center">
        <div className="h-auto w-full">
          <div className="p-14">
            <img src={candleData?.image} alt="" className="rounded-xl" />
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
            <h1 className="text-3xl font-bold w-2/3">{candleData?.title}</h1>
            <p className="text-gray-600 flex items-center gap-2 text-sm">
              <span className="flex items-center">
                {starCount.map((star, idx) => (
                  <FaStar key={idx} className="text-brookies-secondary" />
                ))}
              </span>
              {`${candleData?.ratings} reviews`}
            </p>
            <p className="text-sm mt-8">{`$${candleData?.price} AUD`}</p>
            <p className="text-sm text-gray-500">Tax included.</p>
            <div className="text-sm my-8 mb-20 w-full">
              <p className="mt-4 w-[20rem]">
                Our exclusive candle collection is designed for those who
                appreciate elegance and fragrance. Crafted with premium wax and
                infused with delightful aromas to enhance your ambiance.
              </p>
            </div>
            <button className="text-slate-100 bg-brookies-primary w-full rounded-lg py-3 px-4 hover:bg-brookies-secondary transition duration-150 ease-in-out">
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <Reviews ratings={candleData?.ratings} />
    </Container>
  );
};

export default CardsCandleDetails;
