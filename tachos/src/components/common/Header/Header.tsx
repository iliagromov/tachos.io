import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames'
import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './Header.sass';
import { getScrollbarSize, toggleBodyScroll } from '../../../shared/utils';

// FIXME: вынести меню в компонент

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
  const [stateMenu, setState] = useState(false);


  const setMenuVisibility = (value: boolean) => {
    setState(value)
  }


  const toggleBodyNavShowed = (isShowed: boolean) => {
    const body = document.body
    toggleBodyScroll(isShowed)

    if (isShowed) {
      body.classList.add('nav-showed')
    } else {
      body.classList.remove('nav-showed')
    }
  }


  const toggleMenu = useCallback(() => {
    console.log('menu-trigger');
    setMenuVisibility(!stateMenu)
    toggleBodyNavShowed(!stateMenu)
  }, [stateMenu])


  const menuTitle = stateMenu ? "На главную" : "Меню";
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
              <nav className="nav-menu">
                <Link className="page-link" to="/">Проекты
                  <span className="page-link_counter">10</span>
                </Link>
                <Link className="page-link" to={'/team'}>Команда </Link>
                <Link className="page-link" to={'/team'}>Услуги </Link>
                <Link className="page-link" to={'/team'}>Отзывы </Link>
              </nav>
            </div>
            <div className="header__nav_mobile">
              <button
                className={cn('menu-trigger')}
                type="button"
                onClick={toggleMenu}
              >
                <i className="menu-trigger__icon" />
                <span>
                  {menuTitle}
                </span>
              </button>
            </div>
          </div>
          <div className="header__action">
            <button className="page-btn" type="button">Обсудить проект</button>
          </div>

          <nav className={cn('menu', stateMenu && 'navShowed')} >
            <div className="wrapper">
              <div className="menu-inner">
                <div className="menu__list">
                  <ul className={'menu-list'}>
                    <Link className="page-link page-link_project" to="/">Проекты
                      <span className="page-link_counter">10</span>
                    </Link>
                    <Link className="page-link" to={'/team'}>Команда </Link>
                    <Link className="page-link" to={'/team'}>Услуги </Link>
                    <Link className="page-link" to={'/team'}>Отзывы </Link>
                  </ul>
                </div>
                
                <div className="menu__footer">
                  <button className="page-btn" type="button">Обсудить проект</button>
                </div> 
              </div>
            </div>
            
          </nav>
        </div>
      </div>

    </header>

  );
}
export { HeaderComponent };