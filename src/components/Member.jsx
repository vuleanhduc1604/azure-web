import React from 'react';
import '../css/coreteam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 

const members = [{
    avatar: './src/assets/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: './src/assets/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
}, {
    avatar: './src/assets/thanhphu.png', 
    name: 'Phú Thành',
    stat: 'President', 
    contact: 'Phú Thành',
    link: '#',
},] 
const memberHTML = members.map(mem => `
<div class="member-list">
    <div class="avatar">
        <img src="${mem.avatar}" alt="${mem.name}">
    </div>
    <div class="card">
        <div class="name">${mem.name}</div>
        <div class="position">${mem.stat}</div>
        <div class="contact-wrapper">
            <div class="contact flex">
                <div class="contact-logo flex">
                    <i class="fa-brands fa-github"></i>
                </div>
                <div class="contact-link">
                    <a href="${mem.link}">${mem.contact}</a>
                </div>
            </div>
        </div>
    </div>
</div>
`)
const Member = () => {
    return (
        <div className='py-8'>
            {<div className='members-list' dangerouslySetInnerHTML={{ __html: memberHTML}} />}
        </div>
    );
};

export default Member;