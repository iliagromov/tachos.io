import React, { FC } from 'react';

import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './style.sass';

const Header: FC = () => {
  const { 
    logoHeader
  } = useStaticQuery(graphql`
    query  {
      logoHeader: file(relativePath: { eq: "logo-header.svg" }) {
          publicURL
          name
      }
    }`);
  return (

    <header className="header">
      <div className="wrapper">
        <div className="header-inner">
          <div className="header__logo">
              <a className="page-link" href="/">
                <ReactSVG src={logoHeader.publicURL}/>
              </a>
          </div>
          <div className="header__nav">
            <div className="header__nav_desktop">
              <nav className="nav"> <a className="page-link" href="">Проекты <span
                className="page-link_counter">10</span></a><a className="page-link"
                  href="">Команда </a><a className="page-link"
                    href="">Услуги </a><a className="page-link"
                      href="">Отзывы </a></nav>
            </div>
            <div className="header__nav_mobile"><button className="page-link js-mobile-menu" href="/"
              type="button">Меню</button></div>
          </div>
          <div className="header__action"><button className="page-btn" type="button">Обсудить проект</button></div>
        </div>
      </div>

    </header>

  );
}


export default Header;

