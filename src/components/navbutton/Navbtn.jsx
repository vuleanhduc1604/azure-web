import React from 'react';
import { useSwiper } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Navbtn = () => {
    const swiper = useSwiper();

    return (
        <div className='core-control my-8 px-10'>
                <button class="control arrow-left" onClick={() => swiper.slidePrev()}>
                    <FontAwesomeIcon icon={faArrowLeft} className='block mx-auto'/>
                </button>
                <button class="control arrow-right" onClick={() => swiper.slideNext()}>
                    <FontAwesomeIcon icon={faArrowRight} className='block mx-auto'/>
                </button>               
            </div>
    );
};

export default Navbtn;