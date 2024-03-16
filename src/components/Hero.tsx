import React from 'react';
import Image from "next/image";
import CustomButton from '@/components/CustomButton';


const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Drugs, sex or just rent a Car -- so 
        quickly and easy!
        </h1>

<p className="hero__subtitle">

  Your experiance our mission, rent car today! We give you the best cars for nice price!
  
  </p>
<CustomButton/>
      </div>
    </div>
    
  )
}

export default Hero