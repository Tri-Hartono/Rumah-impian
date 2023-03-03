import React from 'react';

const CardLayanan = (props) => {
  return (
    <>
      <div className="w-full px-10 py-4 bg-bgColor shadow-md hover:bg-green-900 hover:text-white group transtion duration-100 flex flex-col items-center gap-2 rounded-md">
        <div className="flex items-center justify-center rounded-full h-14 w-14 p-2 bg-green-900 group-hover:bg-white transition duration-300 group-hover:delay-200">
          <img src={props.imgUrl} alt="" />
        </div>
        <h2 className="font-semibold">{props.title}</h2>
        <p>{props.ket}</p>
      </div>
    </>
  );
};

export default CardLayanan;
