import React from 'react';
import Beranda from '../pages/Beranda';
import Kontak from '../pages/Kontak';
import TemukanRumah from '../pages/TemukanRumah';
import Properti from '../pages/Properti';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { useEffect } from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const Routers = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/beranda" />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/temukanrumah" element={<TemukanRumah />} />
        <Route path="/properti" element={<Properti />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/temukanrumah/detailrumah/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default Routers;
