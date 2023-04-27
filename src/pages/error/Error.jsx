import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '/logo-error.png'
import '../../css/error.css'
const componentTitle = "Error";
const componentDesc = "";
const Error = () => {
    return (
        <div className='bg-white flex'>
            <Helmet>
                <title>{componentTitle}</title>
                <meta name="description" content={componentDesc} />
            </Helmet>
            <div className='wrapper-404 flex mx-auto'>
                <div className='logo-wrapper-img'>
                    <img src={logo} alt="AzureAms" className='logo-img' />
                </div>
                <div className="text-wrapper">
                    <p className='error-text'>404</p>
                    <p className='non-exist'>Trang không tồn tại</p>
                </div>
            </div>
        </div>
    );
};

export default Error;