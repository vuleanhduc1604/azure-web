import React from 'react';
import '../css/coreteam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper';
import Navbtn from './Navbtn';


// core team 
const cores = [{
    avatar: '/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: '/lgb.JPG', 
    name: 'Gia Bách', 
    stat: 'Vice President', 
    contact: 'giabach1106', 
    link: '#',
}, {
    avatar: '/canh.png', 
    name: 'Công Anh', 
    stat: 'Vice President', 
    contact: 'Canh Soup', 
    link: '#',
}, {
    avatar: '/mdung.png', 
    name: 'Minh Dũng', 
    stat: 'Project Leader', 
    contact: 'duongdung', 
    link: '#',
}, {
    avatar: '/qminh.png', 
    name: 'Quang Anh', 
    stat: 'Project Leader', 
    contact: 'nqanhhh123',
    link: '#',
}, {
    avatar: '/tluong.png', 
    name: 'Thiên Lương', 
    stat: 'Head of Pr', 
    contact: 'Lương Nguyễn', 
    link: '#',
}, {
    avatar: '/lebach.png', 
    name: 'Lê Bách', 
    stat: 'Head of Events', 
    contact: 'Bách Lê', 
    link: '#',
}, {
    avatar: '/hphat.png', 
    name: 'Hữu Phát', 
    stat: 'Head of Med - Des', 
    contact: 'tuciphat2507', 
    link: '#',
}]

const Coreteam = () => {
    return (
        <div className='py-8'>
            <Swiper 
                className='core-list'
                slidesPerView={3}
                modules={[Navigation]}
                loop={true}
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
                {cores.map((mem) => (
                    <SwiperSlide>
                        <div class="core-member">
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

export default Coreteam;




/* NOT WORKING

const createDiv = (element) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('core-member')
    const avatarWrapper = document.createElement('div');
    avatarWrapper.classList.add('avatar')
    const img = document.createElement('img');
    img.src = `${element.avatar}`;
    img.alt = `${element.name}`
    const card = document.createElement('div');
    card.classList.add('card')
    const name = document.createElement('div');
    name.classList.add('name');
    name.innerHTML = `${element.name}`
    const position = document.createElement('div');
    position.classList.add('position');
    position.innerHTML = `${element.stat}`
    const contact = document.createElement('div');
    contact.classList.add('contact')
    const contactLinkWrapper = document.createElement('div');
    contactLinkWrapper.classList.add('contact-link')
    const contactLink = document.createElement('a');
    contactLink.href = `${element.link}`;
    contactLink.innerHTML = `${element.contact}`
    avatarWrapper.appendChild(img);
    contactLinkWrapper.appendChild(contactLink);
    contact.appendChild(contactLinkWrapper);
    card.appendChild(name);
    card.appendChild(position);
    card.appendChild(contact);
    wrapper.appendChild(avatarWrapper);
    wrapper.appendChild(card);
    return wrapper
}
*/