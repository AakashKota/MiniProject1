import React from 'react';
import { Link } from "react-router-dom";
import Img1 from "../../../Assets/productimgs/camera.jpg";
import "./HomeIcons.css"

const HomeIcons = () => {
  return (
    <>   <section className="home-wrapper-1 py-5">
    <div className="container-xxl">
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <div className="main-banner position-relative p-3">
            <img src={Img1} className="img-fluid rounded-3" alt="main banner"/>
            <div className="main-banner-content position-absolute" style={{ marginTop: 125 }}>
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $999.00 or $41.62/mo.</p>
              <Link>BUY NOW</Link>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner position-relative p-3">
              <img src={Img1} className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default HomeIcons