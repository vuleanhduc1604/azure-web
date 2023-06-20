import React from 'react';
import newsimage from '/news.png'
import Servicecard from '../../components/card/Card';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import logogreeting from '/logo-greeting.png'
import Servicesection from '../../components/servicesection/Servicesection';
const componentTitle = "News & Blogs";
const componentDesc = "";
const Newsandblogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Helmet>
                <title>{componentTitle}</title>
                <meta name="description" content={componentDesc} />
            </Helmet>
            <div className="greeting pt-6 bg-dark h-full py-10 flex flex-col md:py-32 md:flex-row md:items-center md:justify-center px-4 sm:px-10 md:px-32 lg:px-52">
                <div className="md:w-1/2 mx-auto flex flex-col md:items-start">
                <h1 className="text-4xl font-bold text-white mb-4">News and Blogs</h1>
                <p className="text-lg text-white greeting-pg">Tin tức cập nhật mới nhất từ CLB</p>
                </div>
                <div className="md:w-1/3 mx-auto mt-8 md:mt-0">
                <img srcSet={logogreeting} alt="Image" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className='bg-light-round-white'>
                <div className="py-8">
                    <div className="w-full px-4 mb-8 mx-auto">
                        <div className="container mx-auto px-4">
                            <h1 className="text-header text-3xl text-blue-500 mb-3 text-center">Mới nhất</h1>                         
                            <div className="px-4 mb-8 flex">
                                <div className="bg-white rounded-t-3xl shadow-lg border border-gray-300 mx-auto hover-shadow">
                                    <img src={newsimage} alt="" className="w-full" />
                                    <div className="px-6">
                                        <h2 className="text-2xl font-bold my-4">Box 1</h2>
                                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, facilisis turpis vitae, consequat mauris.</p>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>  
                </div>
                <div className="py-8">
                    <div className="w-full px-4 mb-8 mx-auto">
                        <div className="container mx-auto px-4">
                        <h1 className="text-header text-3xl text-blue-500 mb-3">News & Blogs</h1>
                        </div>
                        <Servicesection />
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Newsandblogs;