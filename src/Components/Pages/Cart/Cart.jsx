import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import Cookies from "js-cookie";
const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      let cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];
      setCartItems(cart);
    };

    fetchCartItems();
  }, []);

  const removeItem = (id) => {
    let updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-brookies-primary min-h-96">
      <Helmet>
        <title>Your Shopping Cart</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4">Your cart</h2>
      <hr className="border-gray-300 mb-6" />

      {/* {cartItems.length === 0 ? (
         text-center">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 mb-6 border-b pb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold ">
                {item.name}
              </h3>
              <p className="text-sm ">{item.description}</p>
              <button
                onClick={() => removeItem(item.id)}
                className=" text-sm mt-1 hover:underline"
              >
                Remove
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, "decrease")}
                className="p-2 border rounded-md  hover:bg-gray-200"
              >
                <Minus size={16} />
              </button>

              <span className="text-lg font-medium w-6 text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => updateQuantity(item.id, "increase")}
                className="p-2 border rounded-md  hover:bg-gray-200"
              >
                <Plus size={16} />
              </button>
            </div>

            <p className="text-lg font-semibold ">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))
      )} */}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
