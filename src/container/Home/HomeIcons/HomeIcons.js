import React from 'react';
import { Link } from "react-router-dom";
import Img1 from "../../../Assets/productimgs/camera.jpg";
import Img2 from "../../../Assets/productimgs/laptop.jpg";
import Img3 from "../../../Assets/productimgs/mobile.jpg";
import Img4 from "../../../Assets/productimgs/shoes.jpg";
import "./HomeIcons.css"

const HomeIcons = () => {
  return (
    <>  
   <section className="home-wrapper-1">
    <div className="container-xxl">
      <div className="row d-flex align-items-center">
        <div className="col-3">
          <div className="main-banner position-relative p-3">
            <img src={Img1} className="img-fluid rounded-3" alt="main banner"/>
            <div className="main-banner-content position-absolute" style={{ marginTop: 150}}>
              <Link className="button" to="/cameras">BUY NOW</Link>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner position-relative p-3">
              <img src={Img2} className="img-fluid rounded-3"
                alt="main banner" />
              <div className="small-banner-content position-absolute" style={{ marginTop: 172 }}>
                <Link className="button" to="/laptops">BUY NOW</Link>
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-3">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner position-relative p-3">
              <img src={Img3} className="img-fluid rounded-3"
                alt="main banner" />
              <div className="small-banner-content position-absolute" style={{ marginTop: 172 }}>
                <Link className="button" to="/mobiles">BUY NOW</Link>
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-3">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner position-relative p-3">
              <img src={Img4} className="img-fluid rounded-3"
                alt="main banner" />
              <div className="small-banner-content position-absolute" style={{ marginTop: 172 }}>
                <Link className="button" to="/shoes">BUY NOW</Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section></>
  )
}

export default HomeIcons