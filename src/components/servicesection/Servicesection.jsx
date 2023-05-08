import React from 'react';
import image from '/Image.png'
import '../../css/card.css'
import Card from '../card/Card';
const Servicesection = () => {
    return (
      <section className="flex py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full sm:w-1/2 px-4 mb-8 ">
        <Card />
      </div>                  
      <div className="w-full sm:w-1/2 px-4 mb-8">
        <Card /> 
      </div>   
    </div>
      </section>
    );
};

export default Servicesection;