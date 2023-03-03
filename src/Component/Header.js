import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../Asset/img/Logoo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

export const NAV__LINK = [
  {
    display: 'Beranda',
    url: '/beranda',
  },
  {
    display: 'Temukan Rumah',
    url: '/temukanrumah',
  },

  {
    display: 'Properti',
    url: '/properti',
  },
  {
    display: 'Kontak',
    url: '/kontak',
  },
];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header-scroll');
      } else {
        headerRef.current.classList.remove('header-scroll');
      }
    });
  }, []);
  return (
    <>
      <div className="header 2xl:w-3/4 h-20" ref={headerRef}>
        <div className="flex items-center justify-center gap-2 z-30">
          <img src={Logo} alt="" />
          <h2 className="font-semibold">Rumah Impian</h2>
        </div>
        <div
          className={
            'fixed inset-0 -translate-y-full md:translate-y-0 z-20 bg-green-900 md:bg-transparent md:relative flex flex-col gap-6 md:flex-row items-center justify-center transition duration-1000 ' +
            (navbarOpen ? 'translate-y-0' : '-translate-y-full')
          }
        >
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            {NAV__LINK.map((item, index) => (
              <li key={index}>
                <NavLink to={item.url}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:hidden">
            <Link to="/register">
              <button className="font-semibold">Daftar</button>
            </Link>
            <Link to="/login">
              <button className="bg-white text-green-900 font-semibold px-6 py-2 rounded-sm hover:bg-green-900 hover:text-white transition duration-300">Masuk</button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center gap-4">
          <Link to="/register">
            <button className="font-semibold">Daftar</button>
          </Link>
          <Link to="/login">
            <button className="bg-white text-green-900 font-semibold px-6 py-2 rounded-sm hover:bg-green-900 hover:text-white transition duration-300">Masuk</button>
          </Link>
        </div>
        <div className="cursor-pointer flex md:hidden items-center justify-center z-30" onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <FontAwesomeIcon icon={faXmark} className="h-6 w-6 text-gray-900 dark:text-slate-200" /> : <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-gray-900 dark:text-slate-200" />}
        </div>
      </div>
    </>
  );
};

export default Header;
