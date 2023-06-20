import React from 'react';
import logofooter from '/logo-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
          <footer className='flex justify-between'>
          <div className="footer-left">
          <h2 className="footer-left-header">Liên hệ</h2>
          <div className="footer-left-content-wrapper flex">
            <div className="logo-wrapper">
              <p><FontAwesomeIcon icon={faSquarePhone}/></p>
              <p><FontAwesomeIcon icon={faEnvelope}/></p>
              <p><i className="fa-brands fa-square-facebook" /></p>
            </div>
            <div className="footer-left-content">
              <p className="footer-left-p">(+84) 975 277 277</p>
              <p className="footer-left-p">azureamsprogrammingclub@gmail.com</p>
              <a className='no-ani' href="https://facebook.com/azureamsprogramming"><p className="footer-left-p">AzureAms Programming Club</p></a>
            </div>
          </div>
        </div>
        <div className="footer-right flex">
          <div className="logo-wrapper">
            <img src={logofooter} className="logo-footer" alt="AzureAms" />
          </div>
          <div className="footer-right-content">
            <div className="footer-right-header">AzureAms Programming Club</div>
            <div className="footer-right-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
        </footer>
        </div>
    );
};

export default Footer;