import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Component } from 'react';
import { useState, useEffect } from 'react';
const News = () => {
    let { id } = useParams();
    let [username, setUsername] = useState('');
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [type, setType] = useState('');
    let [img, setImg] = useState('');
    useEffect(() => {
        axios.get('http://localhost:5000/news/' + id)
        .then(res => {
            setUsername(res.data.username)
            setTitle(res.data.title)
            setDescription(res.data.description)
            setType(res.data.type)
            setImg(res.data.img)
            console.log(username)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            {username}
        </div>
    );
};

export default News;


{
    /*
        axios.get('http://localhost:5000/news/')
            .then(res => {
                this.setState({
                    username: res.data.username,
                    title: res.data.title,
                    description: res.data.description,
                    type: res.data.type,
                    img: res.data.img
                })
            })
            .catch(err => {
                console.log(err)
            })
     */
}