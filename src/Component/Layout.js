import React from 'react';
import Routers from '../Routes/Routers';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className="2xl:w-3/4 mx-auto">
      <Header />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
