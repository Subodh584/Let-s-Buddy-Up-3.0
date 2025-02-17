import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import SubHeading from "../SubHeading";
import Footer from "../Footer";
import { TimeControlledScroll } from "../Effects";

export default function SellPage() {
  const [files, setFiles] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  
  const navigate = useNavigate(); // Hook for navigation

  function handleChange1(e) {
    const sellectedImages = Array.from(e.target.files);
    setFiles(sellectedImages);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    files.forEach((file) => {
      formdata.append("image", file);
    });
    formdata.append("productName", productName);
    formdata.append("price", price);
    formdata.append("category", category);
    formdata.append("userId", localStorage.getItem("UserId"));
    formdata.append("description", description);

    try {
      navigate("/market");
      const resopnse = await axios.post("http://localhost:3000/uploadproductdata", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Hello");
       // Redirect to /market after successful submission
    } catch (err) {
      console.log(err.message);
    }finally{navigate("/market");}
  }

  return (
    <>
      <TimeControlledScroll position={0} time={800} />
      <Header />
      <SubHeading name="Marketplace" name2="Sell" to="/market" />
      <section className="market" id="sellmarket">
        <div className="enter-product-detail-container1">
          <form className="enter-product-detail-container" encType="multipart/form-data" onSubmit={handleSubmit}>
            <label className="lable-in-sellpage sellflexelement">Upload Product Details</label>
            <input className="sellflexelement" required type="file" multiple onChange={handleChange1} />

            <input className="sellflexelement" required
              type="text"
              placeholder="Name"
              onChange={(e) => setProductName(e.target.value)}
            />

            <textarea className="sellflexelement" id="selldesc" required
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <input className="sellflexelement" required
              type="text"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              onKeyDown={(e) => {
                // Allow only numbers (0-9)
                if (
                  !/^\d+$/.test(e.key) &&
                  e.key !== "Backspace" &&
                  e.key !== "Delete" &&
                  e.key !== "ArrowLeft" &&
                  e.key !== "ArrowRight"
                ) {
                  e.preventDefault();
                }
              }}
            />

            <select className="sellflexelement" required
              id="category"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="electronics">Electronic</option>
              <option value="books">Book</option>
              <option value="clothings">Clothing</option>
              <option value="personalCare">Personal Care</option>
              <option value="tickets">Ticket</option>
              <option value="store" selected>Other</option>
            </select>
            <button className="sellflexelement" type="submit" >Upload</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
