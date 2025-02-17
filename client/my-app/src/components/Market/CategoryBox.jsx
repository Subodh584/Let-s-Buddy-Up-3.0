import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CategoryBox({
  src,
  category_name,
  category_desc,
  category_id,
}) {
  const [totProducts, setTotProducts] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  useEffect(() => {
    async function fetchNoOfProducts() {
      try {
        const response = await axios.post(
          "http://localhost:3000/retrieveNoOfProducts",
          { category_id: category_id }
        );
        setTotProducts(response.data.response1.length);
        setMinPrice(response.data.response2.rows[0].min_price);
      } catch (err) {
        console.log(err.stack);
      }
    }
    fetchNoOfProducts();
  }, [category_id]);

  return (
      <div className="box">
        <div className="image">
          <img src={src} alt={category_name} />
        </div>
        <div className="content">
          <span>{category_name}</span>
          <h3>{category_desc}</h3>
          <Link to={`/category/${category_id}`} className="btn">
            Visit now
          </Link>
          <div className="icons">
            <Link to="#">
              <i className="fas fa-box" /> Available Products - {totProducts}
            </Link>
            <Link to="#">
              <i className="fas fa-tag" /> Starts from:- ₹{minPrice||0}
            </Link>
          </div>
        </div>
      </div>
  );
}
