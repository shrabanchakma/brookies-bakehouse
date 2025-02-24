import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Container from "../../Shared/Container";
import { useLoaderData } from "react-router-dom";
import { FaBox, FaStar } from "react-icons/fa";
import { CiCircleQuestion, CiHeart } from "react-icons/ci";
import { getCardsCandles } from "../../../Api/utils";
import SideCards from "./SideCards";
import Reviews from "./Reviews";
const starCount = [1, 2, 3, 4, 5];
const sizeOptions = ['Small (6" )', 'Medium (6" Tall)'];
const flavourOptions = ["Chocolate", "Vanilla", "Salted Caramel"];
const optionalExtrasOptions = [
  "No Extras",
  "Cherries",
  "Additional Piping",
  "Additional Piping + Cherries",
];
const cakeColoursOptions = [
  "Hot Pink",
  "Baby Pink",
  "Red",
  "Baby Blue",
  "Royal Blue",
  "Tiffany Blue",
  "Sage (light green)",
  "Lavender",
  "Purple",
  "Yellow (pastel)",
  "Yellow (bright)",
  "Apricot",
  "Orange (bright)",
  "Burgundy",
  "Black",
  "Natural (white/cream)",
];
const pipingColoursOptions = [
  "Baby Pink",
  "Hot Pink",
  "Red",
  "Baby Blue",
  "Tiffany Blue",
  "Royal Blue",
  "Lavender",
  "Yellow (pastel)",
  "Yellow (bright)",
  "Apricot",
  "Orange (bright)",
  "Sage (light green)",
  "Natural (white/cream)",
  "Black",
];

const messageColorOptions = ["Red", "Pink", "White"];

const ProductPage = () => {
  const productData = useLoaderData();
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

  return (
    <Container>
      <section className=" flex items-start justify-center ">
        {/* form */}
        <div className="h-auto w-full">
          <div className="p-14 ">
            <img src={productData?.image} alt="" className="rounded-xl" />
          </div>
          <div className="text-brookies-primary p-20 py-1 space-y-5 text-sm">
            <p>Store Policy</p>
            <p>
              Cake orders close at 6:00am Mondays for the week. If your chosen
              date is not showing, we are already fully booked and no longer
              taking bookings. Please double check your order before placing it.
              If you require changes to your order (colour/flavour/size/date),
              please note there is a $10 administration fee for all order
              changes and/or cancellations. Within 7 days of collection, we are
              not able to accept changes to your order.
            </p>
            <p>
              Before ordering,please read our{" "}
              <span className="underline cursor-pointer hover:text-brookies-secondary">
                terms and conditions of sale.
              </span>
            </p>
          </div>
        </div>
        <div className="text-brookies-primary h-auto w-full grid cols-span-1 pt-28">
          <div className=" w-[20rem] place-self-center">
            <h1 className="text-3xl font-bold w-2/3"> {productData?.title}</h1>
            <p className="text-gray-600 flex items-center gap-2 text-sm ">
              <span className="flex items-center ">
                {starCount.map((star, idx) => (
                  <FaStar key={idx} className="text-brookies-secondary " />
                ))}
              </span>
              {`${productData?.ratings} reviews`}
            </p>
            <p className="text-sm mt-8">{`$${productData?.price} AUD`}</p>
            <p className="text-sm text-gray-500 ">Tax included.</p>
            <div className="text-sm my-8 mb-20 w-full">
              <p className="mt-4  w-[20rem]">
                Our round vintage cakes are perfect for the aesthetically driven
                party people, whether you’re celebrating a major moment in life
                or celebrating someone great.
                <br />
                <br /> Each cakes comes with bottom and top vintage piping. For
                additional vintage piping in the middle of the cake, please
                select additional piping. We will be sure to work our cake magic
                for you!
              </p>

              <h2 className="font-bold mt-4 mb-2">Serving Size Guide</h2>
              <p>Small 6" cake (serves 10-15)</p>
              <p>Medium 6" cake tall (serves 20)</p>

              <h2 className="font-bold mt-4 mb-2">Store Policy</h2>
              <p className="w-[20rem] ">
                Please check our pick up policy before ordering. Cake orders
                close 6:00am Mondays for the week, please order before cut off
                times to avoid disappointment. <br />
                <br /> Please check your order before placing it. There is a $10
                administration fee for any change requests after an order is
                placed. Within 7 days of collection, we cannot cancel or change
                your order.
              </p>
            </div>

            <div className="my-6 space-y-4 w-full">
              <div className="space-y-1">
                <p>Size:</p>
                <select className="select w-full max-w-xs focus:outline-none rounded-none border-1 border-brookies-primary ">
                  <option disabled>Select Cake Size</option>
                  {sizeOptions.map((size, index) => (
                    <option key={index}>{size}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <p>Flavour:</p>
                <select className="select w-full max-w-xs focus:outline-none rounded-none border-1 border-brookies-primary">
                  <option disabled>Select Flavour</option>
                  {flavourOptions.map((flavour, index) => (
                    <option key={index}>{flavour}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <p>Optional Extras:</p>
                <select className="select w-full max-w-xs focus:outline-none rounded-none border-1 border-brookies-primary">
                  <option disabled>Select Extras</option>
                  {optionalExtrasOptions.map((extra, index) => (
                    <option key={index}>{extra}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <p>Cake Colour:</p>
                <select className="select w-full max-w-xs focus:outline-none rounded-none border-1 border-brookies-primary">
                  <option disabled>Select Cake Colour</option>
                  {cakeColoursOptions.map((colour, index) => (
                    <option key={index}>{colour}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <p>Piping Colour:</p>
                <select className="select w-full max-w-xs focus:outline-none rounded-none border-1 border-brookies-primary">
                  <option disabled>Select Piping Colour</option>
                  {pipingColoursOptions.map((colour, index) => (
                    <option key={index}>{colour}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <p>Message Colour:</p>
                <select className="select w-full max-w-xs focus:outline-none rounded-none border-1 border-brookies-primary">
                  <option disabled>Select Message Colour</option>
                  {messageColorOptions.map((colour, index) => (
                    <option key={index}>{colour}</option>
                  ))}
                </select>
              </div>
              <div className="w-[20rem]">
                <p>Message on cake - Line 1 </p>
                <label className="input flex items-center gap-2 rounded-none border-1 border-brookies-primary focus:outline-none active:outline-none">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Letters or numbers only"
                  />
                </label>
              </div>
              <div className="w-[20rem]">
                <p>Message on cake - Line 2 </p>
                <label className="input flex items-center gap-2 rounded-none border-1 border-brookies-primary focus:outline-none active:outline-none">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Letters or numbers only"
                  />
                </label>
              </div>
              <button className="text-slate-100 bg-brookies-primary w-full rounded-lg py-3 px-4 hover:bg-brookies-secondary transition duration-150 ease-in-out ">
                Add to cart
              </button>
            </div>
          </div>
          {/* collapse */}
          <div className="w-[20rem] place-self-center">
            <div className="collapse border-b-[1px] rounded-none border-brookies-primary ">
              <input type="checkbox" />
              <div className="collapse-title text-sm font-bold flex items-center gap-1">
                <CiCircleQuestion size={20} />
                <span>Cake Care</span>
              </div>
              <div className="collapse-content">
                <p>
                  Store in the fridge for up to 3 days. Bring to room
                  temperature (for 1-2 hours) before enjoying the cake.
                </p>
              </div>
            </div>
            <div className="collapse border-b-[1px] rounded-none border-brookies-primary ">
              <input type="checkbox" />
              <div className="collapse-title text-sm font-bold flex items-center gap-1">
                <FaBox size={15} />
                <span>Pick Up Info</span>
              </div>
              <div className="collapse-content">
                <p>
                  We are open Wednesday to Saturday for Pick Up Orders within
                  Brooke business hours: Wed-Fri: 8AM - 5PM Sat: 8AM - 2PM Pick
                  Up orders must be made 3 days in advance. If your desired date
                  is not showing, this date is already fully booked or is no
                  longer available as it falls within three business days.
                  Sorry, this date is now closed for cake orders. Should you
                  require treats within this time frame, please visit us in
                  store on the day to choose from our daily selections. For more
                  Pick Up FAQ’s please click here.
                </p>
              </div>
            </div>
            <div className="collapse border-b-[1px] rounded-none border-brookies-primary ">
              <input type="checkbox" />
              <div className="collapse-title text-sm font-bold flex items-center gap-1">
                <CiHeart size={20} />
                <span>Allergens</span>
              </div>
              <div className="collapse-content">
                <p>Contains gluten, eggs, dairy, may contain traces of nuts.</p>
              </div>
            </div>
          </div>
          {/* cards */}
          <SideCards cardsCandles={cardsCandles} />
        </div>
      </section>
      <Reviews ratings={productData?.ratings} />
    </Container>
  );
};

ProductPage.propTypes = {};

export default ProductPage;
