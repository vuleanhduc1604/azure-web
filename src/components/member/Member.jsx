import React from 'react';
import '../../css/coreteam.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Navbtn from '../navbutton/Navbtn';

const members = [{
    avatar: '/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: '/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: '/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: '/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: '/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: '/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
},] 
const Member = () => {
    return (
        <div className='py-8'>
            <Swiper
                className='members-list'
                slidesPerView={3}
                autoplay={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    760: {
                        slidesPerView: 2,
                    },
                    1100: {
                        slidesPerView: 3,
                    }
                }}
            >
                <Navbtn/>
                {members.map((mem) => (
                    <SwiperSlide>
                        <div class="member-list">
                            <div class="avatar">
                                <img src={mem.avatar} alt={mem.name}/>
                            </div>
                            <div class="card">
                                <div class="name">{mem.name}</div>
                                <div class="position">{mem.stat}</div>
                                <div class="contact-wrapper">
                                    <div class="contact flex">
                                        <div class="contact-logo flex">
                                            <i class="fa-brands fa-github"></i>
                                        </div>
                                        <div class="contact-link">
                                            <a href={mem.link}>{mem.contact}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Member;