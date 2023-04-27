import React from 'react';
import image from '/Image.png'
import Servicecard from '../../components/servicecard/Servicecard';
import logogreeting from '/logo-greeting.png';
import { Helmet } from 'react-helmet';
import Coreteam from '../../components/coreteam/Coreteam';
const componentTitle = "Dịch vụ";
const componentDesc = "";
const Services = () => {
    return (
        <div>
            <Helmet>
                <title>{componentTitle}</title>
                <meta name="description" content={componentDesc} />
            </Helmet>
            <div className="greeting pt-6 bg-blue-900 h-full py-10 flex flex-col md:py-32 md:flex-row md:items-center md:justify-center px-4 sm:px-10 md:px-32 lg:px-52">
                <div className="md:w-1/2 mx-auto flex flex-col md:items-start">
                    <h1 className="text-4xl font-bold text-white mb-4">Dịch vụ</h1>
                    <p className="text-lg text-white greeting-pg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="md:w-1/3 mx-auto mt-8 md:mt-0">
                    <img srcSet={logogreeting} alt="Image" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className='bg-light-round-white'>
                <div className="py-8">
                    <div className="w-full sm:w-1/2 px-4 mb-8 mt-4 mx-auto">
                        <h1 className="text-header text-3xl text-blue-500 mb-10">Dự án nổi bật</h1>
                        <div className="bg-white rounded-t-3xl shadow-lg border border-gray-300 hover-shadow">
                            <img srcSet={image} alt="" className="w-full" />
                            <div className="px-6">
                            <h2 className="text-2xl font-bold my-8">Website App</h2>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="py-8">
                    <div className="w-full px-4 mb-8 mx-auto">
                        <div className="container mx-auto px-4">
                        <h1 className="text-header text-3xl text-blue-500 mb-3">Các dự án</h1>
                        </div>
                        <Servicecard />
                    </div>  
                </div>
                <div className="py-8">
                    <div className="w-full px-4 mb-8 mx-auto">
                        <div className="container mx-auto px-4">
                        <h1 className="text-header text-3xl text-blue-500 mb-3">Core team</h1>
                        </div>
                        <Coreteam />
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Services;