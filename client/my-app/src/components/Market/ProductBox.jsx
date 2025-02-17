import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductBox({
  productName,
  productDesc,
  productPrice,
  productId,
  productUserId,
}) {
  const [sellerName, setSellerName] = useState("");
  const [imgURLs, setImgURLs] = useState([]);
  const [imgNo, setImgNo] = useState(0);

  useEffect(() => {
    async function fetchUserNameFromSellerId() {
      const response1 = await axios.post("http://localhost:3000/usernamefromid", {
        productUserId: productUserId,
      });
      setSellerName(response1.data[0].username);
    }

    async function fetchProductImages() {
      const response2 = await axios.post("http://localhost:3000/imagesfromproductid", {
        productId: productId,
      });
      const imageUrlString = response2.data[0].image_url;


      const formattedImgURLs = imageUrlString.replace(/{/g, "[").replace(/}/g, "]").slice(1, -1).split(',').map(url => url.trim().replace(/"/g, ''));

      setImgURLs(formattedImgURLs); 
    }

    fetchProductImages();
    fetchUserNameFromSellerId();
  }, [productUserId, productId]);


  function handleNextImage(e){
    e.preventDefault();
    if(imgNo<imgURLs.length-1){
      setImgNo(imgNo+1);
    }else{
      setImgNo(0);
    }
  }

  return (
    <div className="box" id="prdctforusrBox">
      <div className="image">
        {imgURLs.length > 0 && (
          <img src={imgURLs[imgNo]} alt={productName} /> 
        )}
        <h4>{imgNo+1+"/"+imgURLs.length}</h4>
        <button onClick={handleNextImage} >Next Image</button>
      </div>
      <div className="content" id="contentproductbox">
        <h3>{productName}</h3>
        <span>{productDesc}</span>
        <div>
          <i className="fas fa-tag" /> Price <h3>{productPrice}</h3>
        </div>
        <Link to={`/${productId}/buynow`} className="btn">
          Buy Now
        </Link>
        <Link to={`/${productId}/cartnow`} className="btn">
          Add to Cart
        </Link>
        <div className="icons">
          <div>
            <i className="fas fa-box" />
            Seller: {sellerName}
          </div>
        </div>
      </div>
    </div>
  );
}
