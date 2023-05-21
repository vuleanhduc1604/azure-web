import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import '../../css/card.css'
export default class Rendernewstest extends Component {
    constructor(props) {
        super(props)
        this.state = {news: []};
    }
    componentDidMount() {
        axios.get('http://localhost:5000/news')
            .then(res => {
                this.setState({news: res.data})
                console.log(this.state)
            })
            .catch(err => console.log(err))
    }
    newsList() {
        /*
        return this.state.news.map(currentnews => {
            return (<div new={currentnews} key={currentnews._id}>
                <p>{currentnews.username}</p>
                <p>{currentnews.description}</p>
            </div>)
        }) */
        return this.state.news.map(currentnews => {
            return (
                <div className="bg-white rounded-t-3xl shadow-lg border border-gray-300 hover-shadow">
                    <img src={currentnews.img} alt="image" className="w-full" />
                    <div className="px-6">
                        <h2 className="text-2xl font-bold my-4">{currentnews.title}</h2>
                        <p className="my-4">{currentnews.description}</p>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='bg-white'>
                {this.newsList().map(currentnewsrender => {
                    return currentnewsrender
                })}
            </div>
        )
    }
}



{
/*
const Backendrendertest = () => {
    let newsarray = []
    useEffect(() => {
        axios.get('http://localhost:5000/news/')
            .then(res => {
                res.data.map(currentres => {newsarray.push(currentres)})
                console.log(newsarray)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    function newsList() {
        return newsarray.map(currentnews => {
            return <News news={currentnews} key={currentnews._id}/>
        })
    } 
    return (
        <div>
            {newsarray.map(currentnews => {return currentnews.username})}
        </div>
    );
};

export default Backendrendertest  */ }