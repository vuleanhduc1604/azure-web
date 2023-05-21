import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
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
                <SwiperSlide>
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
                                            <i className="fa-brands fa-github"></i>
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
                    delay: 1000
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