import React from 'react';
import imgHouse from '../Asset/img/img-header-house.png';
import imgLeft from '../Asset/img/img-left-header.png';
import imgRight from '../Asset/img/img-right-header.png';
import imgLayananSatu from '../Asset/img/icon-1.png';
import imgLayananDua from '../Asset/img/icon-2.png';
import imgLayananTiga from '../Asset/img/icon-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CardLayanan from '../Component/Ui/CardLayanan';
import CardRekomendasi from '../Component/Ui/CardRekomendasi';
import { dataJualRumah } from '../Asset/Data';
import { NavLink } from 'react-router-dom';
import CarouselSwiper from '../Component/Ui/Carousel/CarouselSwiper';
import { Link } from 'react-router-dom';

const Beranda = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="xl:min-h-screen relative flex pt-24 pb-60 xl:pt-0 xl:pb-0 md:items-center bg-gradient-to-br from-greenColor to-black">
          <div className="px-setting text-white md:w-2/3 flex flex-col gap-6 z-20">
            <h1>Membantu Temukan Rumah Impian</h1>
            <p className="md:w-1/2 leading-6">
              <span className="font-bold">Rumah Impian</span> hadir untuk temukan rumah terbaik untuk dijual maupun disewa dengan sumber terpercaya
            </p>
            <div className="flex gap-4 items-center">
              <Link to="/temukanrumah">
                <button className="bg-white/90 font-semibold px-4 py-2 text-green-900 rounded-sm hover:bg-transparent hover:text-white transition duration-300 ">Temukan Rumah</button>
              </Link>
              <Link to="/temukanrumah">
                <FontAwesomeIcon icon={faAngleRight} className="h-6 text-white/80 hover:text-green-900 transition duration-1x00 cursor-pointer" />
              </Link>
            </div>
          </div>
          <img src={imgHouse} alt="" className="w-3/4 xl:w-auto absolute bottom-0 right-0 z-10" />
          <img src={imgLeft} alt="" className="absolute h-full w-1/4 md:w-auto top-0 left-0 z-0 " />
          <img src={imgRight} alt="" className="absolute -right-1/4 -bottom-10 md:right-10 xl:right-1/4 z-0" />
        </div>
        {/* --Layanan--- */}
        <div className="px-setting text-center py-20 ">
          <h1 className="text-green-900">Layanan Kami</h1>
          <h2 className="my-2">Rumah Impian yang hadir menjadi solusi bagi kami </h2>

          <div className="grid md:grid-cols-3 mt-8 gap-6 rounded-md">
            <CardLayanan imgUrl={imgLayananSatu} title="Beli Aman & Mudah" ket="sebagai situs properti terpercaya siap membantu menemukan hunian idaman Anda" />
            <CardLayanan imgUrl={imgLayananDua} title="Jual Properti Cepat" ket="Jual properti lebih mudah dan cepat dengan fitur dan layanan terbaik" />
            <CardLayanan imgUrl={imgLayananTiga} title="Mitra Properti Terbaik" ket="situs properti terbesar dan terpercaya yang telah melayani jutaan masyarakat Indonesia" />
          </div>
        </div>

        {/* Rekomendasi Jual rumah */}
        <div className="px-setting py-10">
          <div className="flex justify-between items-center">
            <h1 className="text-green-900">Rekomendasi Jual Rumah</h1>
            <NavLink to="/temukanrumah" className="bg-green-900 px-4 py-2 text-white rounded-sm text-center">
              Lihat Semua
            </NavLink>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 items-center gap-4 my-10">
            {dataJualRumah
              .filter((item) => item.ket === 'JUAL')
              .slice(0, 4)
              .map((item) => (
                <CardRekomendasi key={item.id} item={item} />
              ))}
          </div>
          {/* Rekomendasi Sewa rumah */}
          <div className="flex justify-between items-center">
            <h1 className="text-green-900">Rekomendasi Sewa Rumah</h1>
            <NavLink to="/temukanrumah" className="bg-green-900 px-4 py-2 text-white rounded-sm text-center">
              Lihat Semua
            </NavLink>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 items-center gap-4 my-10">
            {dataJualRumah
              .filter((item) => item.ket === 'SEWA')
              .slice(0, 4)
              .map((item) => (
                <CardRekomendasi key={item.id} item={item} />
              ))}
          </div>
        </div>
        <CarouselSwiper />
      </div>
    </>
  );
};

export default Beranda;
