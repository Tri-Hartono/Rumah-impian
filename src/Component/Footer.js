import React from 'react';
import { NAV__LINK } from './Header';
import Logo from '../Asset/img/Logoo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white pt-10 md:pt-14 pb-6 flex flex-col gap-8 text-center px-setting">
        <div className="flex flex-col md:flex-row items-start gap-6 text-left justify-between">
          <div className="flex md:items-center md:justify-center gap-2 z-30">
            <img src={Logo} alt="" />
            <h2 className="font-semibold">Rumah Impian</h2>
          </div>
          <ul className="flex flex-col md:flex-row gap-4">
            {NAV__LINK.map((item, index) => (
              <li key={index}>
                <NavLink to={item.url}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <p>Copyright Rumah Impian</p>
      </div>
    </>
  );
};

export default Footer;
