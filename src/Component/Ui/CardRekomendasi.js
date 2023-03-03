import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../Asset/img/homeicon.svg';
import { ReactComponent as BathroomIcon } from '../../Asset/img/iconbathroom.svg';
import { ReactComponent as BedroomIcon } from '../../Asset/img/iconbedroom.svg';

const CardRekomendasi = (props) => {
  const { imgUrl, id, title, alamat, harga, ket, jumlahkt, jumlahkm, luasrumah } = props.item;
  // const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="overflow-hidden  transition duration-300 group relative shadow-xl ">
        <div className="absolute bg-green-900/80 top-2 px-2 rounded-r-md">
          <h3 className="text-white">{ket}</h3>
        </div>
        <img src={imgUrl} alt="" className="w-full group-hover:scale-110 transition duration-500" />
        <div className="px-4 py-2 flex flex-col gap-2 ">
          <h3>{title}</h3>
          <h2 className="font-bold">{harga}</h2>
          <p>{alamat}</p>

          <div className="flex justify-between items-center gap-1">
            <div>
              <div className="text-xs">Kamar Tidur</div>
              <div className="flex items-center gap-2 text-xs mt-1">
                <BedroomIcon className="w-5 h-5" />
                <div>{jumlahkt}</div>
              </div>
            </div>
            <div>
              <div className="text-xs">Kamar Mandi</div>
              <div className="flex items-center gap-2 text-xs mt-1">
                <BathroomIcon className="w-5 h-5" />
                <div>{jumlahkm}</div>
              </div>
            </div>
            <div>
              <div className="text-xs">Luas Rumah</div>
              <div className="flex items-center gap-2 text-xs mt-1">
                <HomeIcon className="w-5 h-5" />
                <div>{luasrumah}</div>
              </div>
            </div>
          </div>
          <Link
            to={`/temukanrumah/detailrumah/${id}`}
            className="text-white bg-green-900  focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm w-1/2 my-2 py-1 hover:bg-green-700 transition duration-200 text-center cursor-pointer  "
          >
            Lihat Detail
          </Link>
          {/* <div onClick={() => setShowDetail(true)} className="text-white bg-green-900  focus:ring-4 focus:outline-none  font-medium rounded-sm text-sm w-1/2 my-2 py-1 hover:bg-green-700 transition duration-200 text-center cursor-pointer  ">
            Lihat Detail
          </div> */}
        </div>
      </div>
      {/* {showDetail && (
        <div className="bg-black/60 w-full fixed flex items-center justify-center z-50  inset-0">
          <div className="w-4/5 bg-white flex flex-col xl:flex-row text-slate-900 items-center p-4 gap-2 md:gap-4 relative cursor-pointer z-20">
            <span className="absolute -top-4 rounded-full -right-4 flex items-center justify-center text-white w-8 h-8 bg-green-900 z-20">
              <button onClick={() => setShowDetail(false)}>
                <FontAwesomeIcon icon={faClose} />
              </button>
            </span>
            <div className="w-full xl:w-1/2">
              <img src={imgUrl} className="w-full" alt="" />
            </div>
            <div className="xl:w-1/2 flex flex-col gap-2 md:gap-6">
              <h2>{title}</h2>
              <h1>{harga}</h1>
              <p>{alamat}</p>
              <p className="text-red-600 font-bold">{ket}</p>
              <div className="flex justify-between items-center">
                <div>
                  <div>Icon</div>
                  <div>{jumlahkt}</div>
                </div>
                <div>
                  <div>Icon</div>
                  <div>{jumlahkm}</div>
                </div>
                <div>
                  <div>Icon</div>
                  <div>{luasrumah}</div>
                </div>
              </div>
              <button className="w-full bg-green-900 p-2 text-white font-semibold flex gap-4 items-center justify-center">
                <FontAwesomeIcon icon={faShoppingCart} />
                Hubungi Penjual
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default CardRekomendasi;
