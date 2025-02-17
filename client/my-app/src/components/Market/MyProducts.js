import React, { useState } from "react";
import axios from "axios";
import ProductBox from "./ProductBox";

import { TimeControlledScroll } from "../Effects";
import Header from "../Header";
import SubHeading from "../SubHeading";
import Footer from "../Footer";

export default function Products() {
  const userId = localStorage.getItem("UserId");
  const [list, setList] = useState([]); // Use state to store product list

  async function handleClick() {
    try {
      const response = await axios.post(
        "http://localhost:3000/retrieveproduct",
        {
          userId: userId,
        }
      );

      // Update the list state with the response data
      setList(response.data);
    } catch (err) {
      console.error("Error retrieving products", err);
    }
  }

  return (
    <>
    <button onClick={handleClick} >Click Me!</button>
      <TimeControlledScroll position={0} time={800} />
      <Header />
      <SubHeading name="Marketplace" />
      <div className="productPageContainer">
        <section className="market">
          {list.length > 0 ? (
            list.map((item, index) => (
              <ProductBox
                key={index}
                productName={item.product_name}
                productDesc={item.description}
                productPrice={"₹" + item.price}
                productId={item.product_id}
                productUserId={item.user_id}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </section>
      </div>
      <Footer/>
    </>
  );
}
