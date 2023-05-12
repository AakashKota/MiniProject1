import React from 'react';
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.css';
import Member1 from '../../Assets/Santhosh.jpg';
import Member2 from '../../Assets/Aakash.jpg';
import Member3 from '../../Assets/Shrikar.jpg';
import Member4 from '../../Assets/Valli.jpg';


const Contact = () => {
  return (
    <div id='model4'>
      < div className="members">
      <div className="member">
        <img width={200} height={200} src={Member1} alt=''/>
        <div className="description">
            <h1>Santosh</h1>
            <div className='divider'></div>
            <h2>Guide</h2>
           
        </div>
      </div>           
      <div className="member">
        <img width={200} height={200} src={Member2} alt=''/>
        <div className="description">
            <h1>Kota Aakash</h1>
            <div className='divider'></div>
            <h3>Student</h3>
           
        </div>
      </div>      
      <div className="member">
        <img width={200} height={200} src={Member3} alt=''/>
        <div className="description">
            <h1>Pandari Shrikar</h1>
            <div className='divider'></div>
            <h3>Student</h3>
                     
        </div>
      </div>
      <div className="member">
        <img width={200} height={200} src={Member4} alt=''/>
        <div className="description">
            <h1>Valli Supriya</h1>
            <div className='divider'></div>
            <h3>Student</h3>
           
        </div>
      </div>
    </div>
</div>


  )
}

export default Contact