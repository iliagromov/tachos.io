import React from "react";
import { HeaderComponent } from "../../components/common/Header/Header";
import { FooterComponent } from "../../components/common/Footer/Footer";
import { DebugGridComponent } from "../../components/common/DebugGrid/DebugGrid";

const Layout = ({ children }) => {


  return (
    <>
      <DebugGridComponent/>
      <HeaderComponent />
      <main className="page">
        {children}
      </main>
      <FooterComponent />
    </>
  );
}

export default Layout;
