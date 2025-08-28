import React from "react";
import images from "./images/images.png";

const card = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="heading text-center text-2xl">
        <h1 className="font-serif">REACT</h1>
      </div>
      <div className="image  flex ">
        <img className="img h-20 " src={images} alt="image" />
      </div>
      <p className="paragraph font-serif">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
        qui aliquam. Libero eos maiores aliquam in voluptatem placeat iusto
        nihil?
      </p>
    </div>
  );
};

export default card;
