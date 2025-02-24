import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CakeItem from "./CakeItem";
import Container from "../../Shared/Container";

const CakesPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const cakes = useLoaderData();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <div className="mx-auto px-4 py-8">
        <div className="mx-5 xl:mx-0 my-10">
          <h2 className="text-brookies-primary text-5xl font-bold py-8">
            Cakes
          </h2>
          <p className="text-brookies-primary text-[14px]">
            Our cakes are made to order and available to pick-up in store. Shop
            our signature celebration cake range and celebrate with Brookies!
            Cake orders close 6:00am Mondays for the week.
          </p>
        </div>

        <button className="flex items-center gap-2 text-stone-700 mb-12">
          Filter and sort
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2  ">
          {cakes && cakes.length > 0 ? (
            cakes.map((cake, index) => (
              <CakeItem
                key={index}
                cake={cake}
                index={index}
                scrollY={scrollY}
              />
            ))
          ) : (
            <div className="col-span-2 text-center py-10">
              <p className="text-lg text-stone-500">
                No cakes available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CakesPage;
