import React from 'react';
import Servicecard from '../../components/servicecard/Servicecard';
import logohome from '/logo-home.png'
import NBShort from '../../components/newsblogs/NBShort';
import { Helmet } from 'react-helmet';
import Coreteam from '../../components/coreteam/Coreteam';
import Member from '../../components/member/Member';
const componentTitle = "Team";
const componentDesc = "";
const Team = () => {
    return (
        <div className="">
            <Helmet>
                <title>{componentTitle}</title>
                <meta name="description" content={componentDesc} />
            </Helmet>
            <div className="greeting pt-6 bg-blue-900 h-full py-10 flex flex-col md:py-32 md:flex-row md:items-center md:justify-center px-4 sm:px-10 md:px-32 lg:px-52">
                <div className="md:w-1/2 mx-auto flex flex-col md:items-start">
                    <h1 className="text-4xl font-bold text-white mb-4">Chúng tôi là ai?</h1>
                    <p className="text-lg text-white greeting-pg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="md:w-1/3 mx-auto mt-8 md:mt-0">
                <img srcSet={logohome} alt="Image" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className='bg-light-round-white'>  
                <div className="py-8">
                    <div className="w-full px-4 mb-8 mx-auto">
                        <div className="container mx-auto px-4">
                        <h1 className="text-header text-3xl text-blue-500 mb-3">Core team</h1>
                        </div>
                        <Coreteam />
                    </div>  
                </div>
                <div className="py-8">
                    <div className="w-full px-4 mb-8 mx-auto">
                        <div className="container mx-auto px-4">
                        <h1 className="text-header text-3xl text-blue-500 mb-3">Thành viên CLB</h1>
                        </div>
                        <Member />
                    </div>  
                </div>
                <div className="py-8">
                    <div className="w-full px-4 mb-8 mx-auto">
                        <div className="container mx-auto px-4">
                            <h1 className="text-header text-3xl text-blue-500 mb-3">News và Blogs</h1>
                        </div>
                        <NBShort />
                    </div>  
                </div>
            </div>
        </div>

    );
};

export default Team;