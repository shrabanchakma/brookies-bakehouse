import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cookie from "./Cookie";

const Cookies = (props) => {
  const [cookies, setCookies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const response = await fetch("/cookies.json");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch cookies. Status: ${response.status}`
          );
        }
        const data = await response.json();
        setCookies(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching cookies:", err);
      }
    };
    fetchCookies();
  }, []);
  //   if (cookies.length > 0) {
  //     console.log("cookies are--->", cookies);
  //   }
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  return (
    <div className="w-full mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  lg:gap-2 xl:gap-0 mt-16">
        {cookies &&
          cookies.length > 0 &&
          cookies.map((cookie) => <Cookie key={cookie.id} cookie={cookie} />)}
      </div>
    </div>
  );
};

Cookies.propTypes = {};

export default Cookies;
