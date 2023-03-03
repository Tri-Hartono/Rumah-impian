import React, { useState } from 'react';
import { dataJualRumah } from '../Asset/Data';
import CardRekomendasi from '../Component/Ui/CardRekomendasi';
import { NavLink } from 'react-router-dom';
import SearchTemukan from '../Component/Ui/SearchTemukan';

const Beli = () => {
  const [searchData, setSearchData] = useState('');
  return (
    <>
      {/* -----------Temukan---- */}

      <div className="md:min-h-screen py-20 flex items-center justify-center px-setting text-white flex-col bg-temukanBackground bg-no-repeat bg-cover bg-center text-center gap-4 ">
        <h1 className="mb-4">Temukan Rumah Impianmu.</h1>

        <SearchTemukan setSearchData={setSearchData} />
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 px-setting items-center gap-4 my-10">
        {dataJualRumah
          ?.filter((item) => {
            if (searchData === '') {
              return item;
            } else if (item.title.toLowerCase().includes(searchData.toLowerCase())) {
              return item;
            } else if (item.ket.toLowerCase().includes(searchData.toLowerCase())) {
              return item;
            }
          })
          .map((item) => (
            <CardRekomendasi key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};

export default Beli;
