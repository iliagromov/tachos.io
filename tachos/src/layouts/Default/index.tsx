import React from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

const Layout = ({ children }) => {


  return (
    <>
    <Header />
    <main className="page">
      {children}
    </main>
    <Footer/>
    </>
  );
}

export default Layout;
