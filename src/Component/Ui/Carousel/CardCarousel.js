import React from 'react';

const CardCarousel = (props) => {
  const { id, imgData, title, price } = props.item;
  return (
    <div className="relative overflow-hidden h-96 bg-white flex flex-col shadow group">
      <div className="overflow-hidden absolute z-0 inset-0">
        <img src={imgData} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative flex items-center w-full h-full flex-col justify-center text-white">
        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>
      {/* <div className="relative bg-green-900 w-fit p-2 rounded-r-md text-white">Detail</div> */}
    </div>
  );
};

export default CardCarousel;
