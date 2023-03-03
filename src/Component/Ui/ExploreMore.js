import React from 'react';
import { dataJualRumah } from '../../Asset/Data';
import CardRekomendasi from './CardRekomendasi';
import { Link } from 'react-router-dom';

const ExploreMore = ({ liveLink }) => {
  return (
    <>
      <div className="px-setting">
        <div className="flex item-center justify-between">
          <h2>Rekomendasi Lain</h2>
          <span>
            <Link to={liveLink}>Explore More</Link>
          </span>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 items-center gap-4 my-10">
          {dataJualRumah
            .filter((item) => item.ket == 'JUAL')
            .slice(0, 2)
            .map((item) => (
              <CardRekomendasi key={item.id} item={item} />
            ))}
          {dataJualRumah
            .filter((item) => item.ket == 'SEWA')
            .slice(0, 2)
            .map((item) => (
              <CardRekomendasi key={item.id} item={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ExploreMore;
