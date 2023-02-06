import React from "react";
import "./Tesla.css";
import Header from "./Header";
import Section from "./Section";

function Tesla() {
  return (
    <>
      <Header />

      <Section
        modelName="Model Y"
        demo="Sehedule a Demo Drive"
        backgroundImage="model-y.jpg"
        btn1="Custom Order"
        btn2="View Inventory"
        arrow={true}
      />
       <Section
        modelName="Model 3"
        demo="Sehedule a Demo Drive"
        backgroundImage="model-3.jpg"
        btn1="Custom Order"
        btn2="View Inventory"
        arrow={true}
      />
      <Section
        modelName="Model S"
        demo="Sehedule a Demo Drive"
        backgroundImage="model-s.jpg"
        btn1="Custom Order"
        btn2="View Inventory"
        arrow={true}
      />
      <Section
        modelName="Model X"
        demo="Sehedule a Demo Drive"
        backgroundImage="model-x.jpg"
        btn1="Custom Order"
        btn2="View Inventory"
        arrow={true}
      />
      <Section
        modelName="Solar Panels"
        demo="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        btn1="Order Now"
        btn2="Learn More"
        arrow={true}
      />
      <Section
        modelName="Solar Roof"
        demo="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        btn1="Order Now"
        btn2="Learn More"
        arrow={true}
      /> 
      <Section
        modelName="Accesories"
        
        backgroundImage="accessories.jpg"
        
        btn1="Shop Now"
        
      /> 
    </>
  );
}

export default Tesla;
