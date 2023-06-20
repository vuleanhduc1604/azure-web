import React from 'react';
import { Component } from 'react';
import '../../css/coreteam.css'
import axios from 'axios';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css'
import Navbtn from '../navbutton/Navbtn';


export default class Coreteam extends Component {
    constructor(props) {
        super(props)
        this.state = {cores: []};
    }
    componentDidMount() {
        axios.get('http://localhost:5000/cores')
            .then(res => {
                this.setState({cores: res.data})
            })
            .catch(err => console.log(err))
    }
    coresList() {
        return this.state.cores.map(currentcores => {
            return (
                <SwiperSlide key={currentcores._id}>
                        <div className="core-member" key={currentcores._id}>
                            <div className="avatar">
                                <img src={currentcores.avatar} alt={currentcores.name}/>
                            </div>
                            <div className="card">
                                <div className="name">{currentcores.name}</div>
                                <div className="position">{currentcores.stat}</div>
                                <div className="contact-wrapper">
                                    <div className="contact flex">
                                        <div className="contact-logo flex">
                                        <i class="fa-brands fa-facebook"></i>
                                        </div>
                                        <div className="contact-link">
                                            <a href={currentcores.link}>{currentcores.contact}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
            )
        })
    }
    render() {
        return (
            <div className='py-8'>
            <Swiper 
                className='core-list'
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
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
                {this.coresList().map(currentcorerender => {
                    return currentcorerender
                })}
            </Swiper>
        </div>
        )
    }
}




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