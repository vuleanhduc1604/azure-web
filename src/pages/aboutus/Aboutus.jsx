import React from 'react';
import logohome from '/logo-home.png'
import NBShort from '../../components/newsblogs/NBShort';
import '../../css/card.css'
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const componentTitle = "Về chúng tôi";
const componentDesc = "";
const Aboutus = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Helmet>
                <title>{componentTitle}</title>
                <meta name="description" content={componentDesc} />
            </Helmet>
            <div className="greeting pt-6 h-full py-10 bg-dark flex flex-col md:py-32 md:flex-row md:items-center md:justify-center px-4 sm:px-10 md:px-32 lg:px-52">
                <div className="md:w-1/2 mx-auto flex flex-col md:items-start">
                <h1 className="text-4xl font-bold text-white mb-4">Giới thiệu về CLB</h1>
                <p className="text-lg text-white greeting-pg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="md:w-1/3 mx-auto mt-8 md:mt-0">
                <img srcSet={logohome} alt="Image" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="bg-light-round-white">
                <div className="py-10 flex justify-center mx-auto md:py-20 flex-col md:flex-row md:items-center md:justify-center px-4 sm:px-10 md:px-15 lg:px-40">
                    <div className="md:w-1/2 mx-auto flex flex-col md:items-start">
                        <div className="container mx-auto px-4">
                            <h1 className="text-header text-3xl text-blue-500 mb-3">Chúng tôi là ai?</h1>
                            <p className='text-3xl font-bold mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <p className='text-xl'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim.</p>
                            <div className='flex pt-5'>
                                <Link to="/team"><button className='more-btn'>Xem thêm <FontAwesomeIcon icon={faArrowRight}/></button></Link> 
                            </div>
                        </div>
                    </div>  
                    <div className='md:w-1/3 mx-auto mt-8 md:mt-0'>
                        <img src={logohome} alt="AzureAms" className='w-full object-cover' />
                    </div>
                </div>
                <div className="pt-0 pb-10 flex justify-center mx-auto md:pb-20 flex-col md:flex-row-reverse md:items-center md:justify-center px-4 sm:px-10 md:px-15 lg:px-40">
                    <div className="md:w-1/2 mx-auto flex flex-col md:items-start">
                        <div className="container mx-auto px-4">
                            <h1 className="text-header text-3xl text-blue-500 mb-3">Chúng tôi làm gì?</h1>
                            <p className='text-3xl font-bold mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <p className='text-xl'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim.</p>
                            <div className='flex pt-5'>
                                <Link to="/services"><button className='more-btn'>Xem thêm <FontAwesomeIcon icon={faArrowRight}/></button></Link>
                            </div>
                        </div>
                    </div> 
                    <div className='md:w-1/3 mx-auto mt-8 md:mt-0'>
                        <img src={logohome} alt="AzureAms" className='w-full object-cover' />
                    </div> 
                </div>
                <div className="py-8">
                    <div className="w-full px-4 mb-8 mx-auto">
                        <div className="container mx-auto px-4">
                        <h1 className="text-header text-3xl text-blue-500 mb-3">News & Blogs</h1>
                        </div>
                        <NBShort />
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Aboutus;