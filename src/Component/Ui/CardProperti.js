import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClose } from '@fortawesome/free-solid-svg-icons';

const CardProperti = (properti) => {
  const { id, imgData, title, price, ket, titletype } = properti.item;
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <div>
        <div className="h-96 rounded-md shadow-xl overflow-hidden">
          <div className="h-2/3">
            <img src={imgData} alt="" className="w-full h-full" />
          </div>
          <div className="p-4">
            <h3>{title}</h3>
            <h2>{price}</h2>
            <div
              onClick={() => setShowDetail(true)}
              className="text-white bg-green-900  focus:ring-4 focus:outline-none  font-medium rounded-md text-sm w-1/2 my-2 py-1 hover:bg-green-700 transition duration-200 text-center cursor-pointer  "
            >
              Lihat Detail
            </div>
          </div>
        </div>
        {showDetail && (
          <div className="bg-black/60 w-full fixed flex items-center justify-center z-50  inset-0">
            <div className="w-4/5 h-4/5 md:h-1/2 lg:h-4/5 bg-white flex flex-col lg:flex-row text-slate-900 items-center p-4 gap-2 md:gap-4 relative cursor-pointer z-20">
              <span className="absolute -top-4 rounded-full -right-4 flex items-center justify-center text-white w-8 h-8 bg-green-900 z-20">
                <button onClick={() => setShowDetail(false)}>
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </span>
              <div className="h-1/2 lg:h-full w-full lg:w-1/2">
                <img src={imgData} className="w-full h-full" alt="" />
              </div>
              <div className="w-full xl:w-1/2 flex flex-col md:gap-4">
                <h2>{titletype}</h2>
                <h1>{price}</h1>
                <p>{ket}</p>
                <button className="w-full py-4 mt-2 rounded-sm bg-green-900 text-white font-semibold flex gap-4 items-center justify-center relative">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Masukkan Keranjang
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardProperti;
