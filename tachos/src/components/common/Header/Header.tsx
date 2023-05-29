import React, { FC } from 'react';

import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './Header.sass';

const HeaderComponent: FC = () => {
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
            <Link className="page-link" to="/">
              <ReactSVG src={logoHeader.publicURL} />
            </Link>
          </div>
          <div className="header__nav">
            <div className="header__nav_desktop">
              <nav className="nav"> 
              <Link className="page-link" to="/">Проекты 
                <span className="page-link_counter">10</span>
              </Link>
              <Link className="page-link" to={'/team'}>Команда </Link>
              <Link className="page-link"  to={'/team'}>Услуги </Link>
              <Link className="page-link"  to={'/team'}>Отзывы </Link>
              </nav>
            </div>
            <div className="header__nav_mobile">
              <button className="page-link js-mobile-menu"
                type="button">Меню</button></div>
          </div>
          <div className="header__action"><button className="page-btn" type="button">Обсудить проект</button></div>
        </div>
      </div>

    </header>

  );
}
export { HeaderComponent };