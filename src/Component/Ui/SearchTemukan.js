import React from 'react';

import { NavLink } from 'react-router-dom';

const SearchTemukan = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-center md:items-start w-full md:w-fit bg-white text-green-900 rounded-t-md">
          <NavLink to="/" className="navlink">
            Beli
          </NavLink>
          <NavLink to="/" className="navlink">
            Sewa
          </NavLink>
          <NavLink to="/" className="navlink">
            Properti Baru
          </NavLink>
        </div>
        <div className="md:grid grid-cols-9 md:h-14 rounded-bl-md overflow-hidden bg-white rounded-br-md rounded-tr-sm">
          <div className="flex py-2 col-span-4 items-center md:px-10 justify-center md:justify-between">
            <div className="flex bg-white items-center xl:gap-2 justify-center">
              {/* <FontAwesomeIcon icon={faHouseChimney} className="text-green-900" /> */}
              <select id="Tipe" name="tipe" className="bg-white text-green-900">
                <option>Tipe Rumah</option>
                <option>2 Lantai</option>
                <option>1 Lantai</option>
                <option>Halaman Luas</option>
              </select>
            </div>
            <div className="flex bg-white items-center xl:gap-2 justify-center">
              {/* <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-green-900" /> */}
              <select id="RangeHarga" name="tipe" className="bg-white text-green-900">
                <option>Range Harga</option>
                <option>Termurah</option>
                <option>Termahal</option>
                <option>Halaman Luas</option>
              </select>
            </div>
          </div>
          <input className="col-span-4 px-4 py-4 md:py-2 bg-white text-green-900 border-none focus:outline-none " type="text" placeholder="Cari Jual/Sewa Rumah/Jenis Properti" onChange={(event) => props.setSearchData(event.target.value)} />
          <button className="bg-green-900 text-white w-full py-2 rounded-sm" onClick={(event) => props.setSearchData(event.target.value)}>
            Cari
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchTemukan;
