import React from "react";
import Header from "../Header";
import SubHeading from "../SubHeading";
import Footer from "../Footer";
import img1 from "../../images/fbook.png";
import img2 from "../../images/felectronics.png";
import img3 from "../../images/store.png";
import img4 from "../../images/fticket.png";
import img5 from "../../images/fpersonal.png";
import img6 from "../../images/fclothes-rack.png";
import { TimeControlledScroll } from "../Effects";
import CategoryBox from "./CategoryBox";

export default function BuyPage() {
  const categories = [
    {
      src: img1,
      category_name: "Book",
      category_desc: "Buy exclusive used books at low price.",
      category_id: 1,
    },
    {
      src: img2,
      category_name: "Electronics",
      category_desc: "Get second-hand electronics at affordable prices.",
      category_id: 2,
    },
    {
      src: img4,
      category_name: "Tickets",
      category_desc: "Purchase tickets for concerts and events.",
      category_id: 5,
    },
    {
      src: img5,
      category_name: "Personal Care",
      category_desc: "Buy personal care products at a discounted price.",
      category_id: 4,
    },
    {
      src: img6,
      category_name: "Clothing",
      category_desc: "Get fashionable clothes at low prices.",
      category_id: 3,
    },
    {
      src: img3,
      category_name: "Store",
      category_desc: "Explore various general items from our store.",
      category_id: 6,
    },
  ];

  return (
    <>
      <TimeControlledScroll position={0} time={800} />
      <Header />
      <SubHeading name="Marketplace" name2="Buy" to="/market" />
      <section className="market">
        {categories.map((category, index) => (
          <CategoryBox
            key={index}
            src={category.src}
            category_name={category.category_name}
            category_desc={category.category_desc}
            category_id={category.category_id}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}
