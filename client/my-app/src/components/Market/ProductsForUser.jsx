import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductBox from "./ProductBox";
import { TimeControlledScroll } from "../Effects";
import Header from "../Header";
import SubHeading from "../SubHeading";
import Footer from "../Footer";

export default function ProductsForUser(){
  const [productListSameId, setProductListSameId] = useState([]);
  const params = useParams();
  const category_id = params.categoryId;

  useEffect(() => {
    async function fetchPrdctByCatId() {
      const response = await axios.post(
        "http://localhost:3000/retrieveNoOfProducts",
        { category_id: category_id }
      );
      setProductListSameId(Array.from(response.data.response1));
    }
    fetchPrdctByCatId();
  }, [category_id]);

  return (
    <>
      <TimeControlledScroll position={0} time={800} />
      <Header />
      <SubHeading name="Marketplace" />
      <div className="productPageContainer">
        <section className="market">
          {productListSameId.length > 0 ? (
            productListSameId.map((product, index) => (
                <ProductBox
                key={index}
                productName={product.product_name}
                productDesc={product.description}
                productPrice={"₹" + product.price}
                productId={product.product_id}
                productUserId={product.user_id}
                
              />
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}
