import React, { useEffect, useState } from 'react';
import { sliderData } from './slider-data';
import "./Slider.css";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"


const Slider = () => {
    const [currentSlide, setCurrentSlide]=useState(0);
    const slideLength=sliderData.length;
    const autoScroll=true;
    let slideInterval;
    let intervalTime=4000;



    const nextSlide=()=>{
        setCurrentSlide(currentSlide === slideLength-1 ? 0 : currentSlide + 1);
    };
    const prevSlide=()=>{
        setCurrentSlide(currentSlide === 0 ? slideLength-1 : currentSlide-1);

    };
    
   
    useEffect(()=>{
        setCurrentSlide(0);

    },[]);

    useEffect(()=>{
        if(autoScroll){
            const auto=()=>{
                slideInterval=setInterval(nextSlide,intervalTime);
            };
            auto();
        }
        return()=>clearInterval(slideInterval);
    },[currentSlide, slideInterval, autoScroll]);

  return (
   <div className='slider'>
    <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
    <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>

    {sliderData.map((slide,index)=>{
        const{image,heading,desc}=slide;
        
    return(
        <div key={index} className={index===currentSlide ? "slide current" : "slide"}>

        {index === currentSlide && (
            <>
                <img src={image} alt=''/>
                <div className='content'>
                    <h2> {heading}</h2>
                    <p>{desc}</p>
                    <hr/>
                </div>
            </>
        )}
        </div>
    );
})}

   </div>
  )
};

export default Slider;