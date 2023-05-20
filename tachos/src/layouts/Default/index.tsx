import React from "react";
import { HeaderComponent } from "../../components/common/Header/Header";
import { FooterComponent } from "../../components/common/Footer/Footer";

const Layout = ({ children }) => {


  return (
    <>
      <HeaderComponent />
      <main className="page">
        {children}
      </main>
      <FooterComponent />
    </>
  );
}

export default Layout;
