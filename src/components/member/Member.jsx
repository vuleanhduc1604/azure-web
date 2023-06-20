import React from 'react';
import { Component } from 'react';
import '../../css/coreteam.css'
import axios from 'axios';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import Navbtn from '../navbutton/Navbtn';


export default class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {members: []};
    }
    componentDidMount() {
        axios.get('http://localhost:5000/members')
            .then(res => {
                this.setState({members: res.data})
            })
            .catch(err => console.log(err))
    }
    membersList() {
        return this.state.members.map(currentmembers => {
            return (
                    <SwiperSlide key={currentmembers._id}>
                        <div className="core-member" key={currentmembers._id}>
                            <div className="avatar">
                                <img src={currentmembers.avatar} alt={currentmembers.name}/>
                            </div>
                            <div className="card">
                                <div className="name">{currentmembers.name}</div>
                                <div className="position">{currentmembers.stat}</div>
                                <div className="contact-wrapper">
                                    <div className="contact flex">
                                        <div className="contact-logo flex">
                                            <i class="fa-brands fa-facebook"></i>
                                        </div>
                                        <div className="contact-link">
                                            <a href={currentmembers.link}>{currentmembers.contact}</a>
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
                className='members-list'
                slidesPerView={3}
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
                {this.membersList().map(currentcorerender => {
                    return currentcorerender
                })}
            </Swiper>
        </div>
        )
    }
}