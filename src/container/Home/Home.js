import React, { useState, useEffect } from "react";


import "./Home.css";
import { db } from "../../Firebase/FirebaseConfig";
import Slider from "./../../components/slider/Slider"

import HomeIcons from "./HomeIcons/HomeIcons";
// import Marquee from "react-fast-marquee";

function Home() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("Products").onSnapshot((snapshot) => {
      setProduct(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
    });
  }, [setProduct]);
  console.log(product);

  return (
    <>
    <div className="home">
      <Slider/>
      <HomeIcons/>      
      </div>      
      </>
  );
}

export default Home;
