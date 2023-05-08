import React from 'react';
import '../../css/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import newsimage from '/news.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
const NBShort = () => {
    return (
        <div>    
            <section className="flex py-8">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 px-4 mb-8">
                        <Card />
                    </div>                  
                    <div className="w-full sm:w-1/2 px-4 mb-8">
                        <Card />
                    </div>   
                    <div className="container mx-auto flex justify-end px-4">
                        <Link to="/newsandblogs"><button className='more-btn'>Xem thêm <FontAwesomeIcon icon={faArrowRight}/></button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NBShort;