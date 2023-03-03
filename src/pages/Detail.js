import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataJualRumah } from '../Asset/Data';
import ExploreMore from '../Component/Ui/ExploreMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as HomeIcon } from '../Asset/img/homeicon.svg';
import { ReactComponent as BathroomIcon } from '../Asset/img/iconbathroom.svg';
import { ReactComponent as BedroomIcon } from '../Asset/img/iconbedroom.svg';
const Detail = () => {
  const { id } = useParams();
  const DetailSell = dataJualRumah.find((item) => item.id === id);
  const [fixSidebar, setFixSidebar] = useState(false);
  function FixedSideBar() {
    if (window.scrollY >= 800) {
      setFixSidebar(true);
    } else {
      setFixSidebar(false);
    }
  }
  window.addEventListener('scroll', FixedSideBar);
  return (
    <>
      <section className="pt-10 md:pt-16  flex flex-col relative ">
        <div className="absolute h-1/4 md:h-1/2 rounded-br-full w-full -top-10 bg-greenColor z-0"></div>
        <div className="grid md:grid-cols-3 px-setting gap-4 py-10 " id="detail">
          <div className=" md:col-span-2 rounded-sm bg-white relative border-2 border-slate-200 overflow-hidden ">
            <div className="">
              <img src={DetailSell.imgUrl} className="w-full" alt="" />
            </div>
            <div className=" flex flex-col gap-6 p-4 shadow-sm">
              <h2>{DetailSell.title}</h2>
              <h2>{DetailSell.harga}</h2>
              <h3>{DetailSell.alamat}</h3>
              <div>
                <div className="font-semibold">Deskripsi</div>
                <p>{DetailSell.deskripsi}</p>
              </div>
              <p className="text-red-600 font-bold">{DetailSell.ket}</p>
              <div className="flex justify-between items-center">
                <div>
                  <div>Kamar Tidur</div>
                  <div>
                    <BedroomIcon className="w-8 h-8" />
                    <div>{DetailSell.jumlahkt}</div>
                  </div>
                </div>
                <div>
                  <div>Kamar Mandi</div>
                  <div>
                    <BathroomIcon className="w-8 h-8" />
                    <div>{DetailSell.jumlahkm}</div>
                  </div>
                </div>
                <div>
                  <div>Luas Rumah</div>
                  <div>
                    <HomeIcon className="w-8 h-8" />
                    <div>{DetailSell.luasrumah}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full flex justify-center relative   ">
            <div className={fixSidebar ? 'sidebar' : 'sidebarfixed'}>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faUser} />
                <div>Rumah Impian</div>
                <div>+021-123-444-553</div>
              </div>
              <input type="text" className="w-full py-2 rounded-sm px-4 text-green-900" placeholder="name" />
              <input type="text" className="w-full py-2 rounded-sm px-4 text-green-900" placeholder="phonenumber" />
              <input type="text" className="w-full py-2 rounded-sm px-4 text-green-900" placeholder="email" />
              <button className="w-full bg-green-900 text-white py-2 hover:bg-bgColor hover:text-green-900 transition duration-300">Kirim Pesan</button>
            </div>
          </div>
        </div>
        <div className="relative">
          <ExploreMore liveLink="/temukanrumah" />
        </div>
      </section>
    </>
  );
};

export default Detail;
