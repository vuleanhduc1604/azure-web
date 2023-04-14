import React from 'react';
import "../css/header-footer.css"
import logoheader from '../assets/logo-header.png';
import iconmode from '../assets/icon-mode.png'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  const activateSearch = () =>  {  
    var searchIcon = document.querySelector('.searchTab');
    var searchBox = document.querySelector('.search');
    var homeWrapper = document.querySelector('.home-wrapper');
    var serviceWrapper = document.querySelector('.service-wrapper');
    var teamWrapper = document.querySelector('.team-wrapper');
    var aboutWrapper = document.querySelector('.about-wrapper');
    var xmark = document.querySelector('.fa-xmark');
    var buttonclose = document.querySelector('.close-search')
    searchBox.classList.toggle("active-search");
    searchIcon.classList.toggle('active-searchTab');
    homeWrapper.classList.toggle('active-search-wrapper');
    serviceWrapper.classList.toggle('active-search-wrapper');
    teamWrapper.classList.toggle('active-search-wrapper');
    aboutWrapper.classList.toggle('active-search-wrapper');
    xmark.classList.toggle('xmark-active');
    buttonclose.classList.toggle('btn-close-active')
  }
    return (
        <div>
          <header className='header'>
            <nav className="flex justify-between">
            <div className="burger-menu">
              <input type="checkbox" id="menu-toggle" />
              <label id="trigger" htmlFor="menu-toggle" />
              <label id="burger" htmlFor="menu-toggle" />
              <ul id="menu">
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Dịch vụ</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Về CLB</a></li>
              </ul>
            </div>
            <div className="header-left">
              <div className="logo-wrapper-header">
                <a href className="logo-anchor">
                  <img srcSet={logoheader} alt="AzureAms" className="logo" />
                </a>
              </div>
            </div>
            <div className="header-right flex">
              <div className="menu-ele flex items-center">
                <div className="home-wrapper">
                  <button className="home-anchor anchor">Trang chủ</button>
                </div>
                <div className="service-wrapper">
                  <button className="service-anchor anchor">Dịch vụ  <i className="fa-solid fa-chevron-down" /></button>
                  <div className="service-dropdown">
                    <p className="service1 service">Dịch vụ 1</p>
                    <p className="service2 service">Dịch vụ 2</p>
                    <p className="service3 service">Dịch vụ 3</p>
                  </div>
                </div>
                <div className="team-wrapper">
                  <button className="team-anchor anchor">Team</button>
                </div>
                <div className="about-wrapper">
                  <button className="about-anchor anchor">Về CLB</button>
                </div>
              </div>
              <div className="search-wrapper flex items-center">
                <button onClick={activateSearch} className="searchTab center button-invis" tabIndex={0} aria-label="Search" data-uia="search-box-launcher">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="center search-icon">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor">
                    </path>
                  </svg>
                </button>
                <form action className="form-search">
                  <input type="text" className="search" placeholder="Tìm kiếm" />
                </form>
                <button onClick={activateSearch} className="close-search"><FontAwesomeIcon icon={faXmark}/></button>
              </div>
              <div className="mode-wrapper flex items-center">
                <img srcSet={iconmode} alt="Icon-mode" className="icon-mode" />
              </div>
            </div>
          </nav>
          </header>
        </div>
    );
};

export default Header;