import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Svg1 from '../../Asset/img/location-outline.svg';
import Svg2 from '../../Asset/img/call-outline.svg';
import logofb from '../../Asset/img/logo fb.svg';
import logoig from '../../Asset/img/logo-instagram.svg';

const Konsultasi = () => {
  return (
    <>
      <div className="min-h-screen px-setting flex flex-col sm:flex-row items-center justify-center xl:justify-between bg-konsultasiBackground bg-cover gap-10 bg-no-repeat bg-center relative py-20">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="md:w-1/2 text-white z-10">
          <h1>Butuh Konsultasi ? Silahkan Kontak kami, kami siap membantu.</h1>
          <div className="flex flex-col gap-2 my-4">
            <div className="flex items-center gap-4 ">
              <img src={Svg1} alt="" />
              <p>Jagakarsa Jakarta Selatan</p>
            </div>
            <div className="flex items-center gap-4 ">
              <img src={Svg2} alt="" />
              <p>021-78887974</p>
            </div>
            <div className="flex items-center gap-4 ">
              <img src={Svg1} alt="" />
              <p>Rumahimpian@gmail.com</p>
            </div>
          </div>
          <div>
            <h2>Sosial Media</h2>
            <div className="flex items-center gap-4">
              <img src={logofb} alt="" />
              <img src={logoig} alt="" />
              <p>Rumah Impian</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-white/60 z-10 md:w-1/2 px-4 py-8 md:px-8 md:py-10 w-full text-center rounded-sm">
          <h1 className="text-green-900">Ada Pertanyaan ? </h1>
          <input className="px-4 py-2 border-none focus:outline-none text-green-900" type="text" placeholder="email" />
          <textarea className="px-4 py-2 border-none focus:outline-none text-green-900" placeholder="Message" />
          <button className="bg-green-900 text-white p-2 rounded-sm font-semibold text-xl">Kirim</button>
        </div>
      </div>
    </>
  );
};

export default Konsultasi;
