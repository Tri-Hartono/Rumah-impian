import React from 'react';
import { useState } from 'react';
import { DataProperti } from '../Asset/DataProperti';
import CardProperti from '../Component/Ui/CardProperti';
import SearchTemukan from '../Component/Ui/SearchTemukan';
const Properti = () => {
  const [searchData, setSearchData] = useState('');
  return (
    <>
      <div>
        <div className="bg-temukanBackground bg-no-repeat bg-cover bg-center px-setting flex items-center h-96">
          <SearchTemukan setSearchData={setSearchData} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 w-full px-setting">
          {DataProperti.filter((item) => {
            if (searchData === '') {
              return item;
            } else if (item.title.toLowerCase().includes(searchData.toLowerCase())) {
              return item;
            } else if (item.titletype.toLowerCase().includes(searchData.toLowerCase())) {
              return item;
            }
          }).map((item) => (
            <CardProperti key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Properti;
