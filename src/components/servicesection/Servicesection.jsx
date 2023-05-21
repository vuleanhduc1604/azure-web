import React from 'react';
import '../../css/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';

export default class Servicesection extends Component {
  constructor(props) {
      super(props)
      this.state = {news: []};
  }
  componentDidMount() {
      axios.get('http://localhost:5000/news')
          .then(res => {
              this.setState({news: res.data})
          })
          .catch(err => console.log(err))
  }
  newsList() {
      return this.state.news.map(currentnews => {
          return (

              <div className='w-full sm:w-1/2 px-4 mb-8' key={currentnews._id}>
                            <Link to={"/news/" + currentnews._id}>
                  <div className="bg-white rounded-t-3xl shadow-lg border border-gray-300 hover-shadow">
                      <img src={currentnews.img} alt="image" className="w-full" />
                      <div className="px-6">
                          <h2 className="text-2xl font-bold my-4">{currentnews.title}</h2>
                          <p className="my-4">{currentnews.description}</p>
                      </div>
                  </div>
                              </Link>
              </div>

          )
      })
  }
  render() {
      return (
          <section className='py-8'>
              <div className="container mx-auto flex flex-wrap justify-between">
                  {this.newsList().map(currentnewsrender => {
                      return currentnewsrender
                  })}
              </div>
              <div className="container mx-auto flex justify-end px-4">
                      <Link to="/newsandblogs"><button className='more-btn'>Xem thêm <FontAwesomeIcon icon={faArrowRight}/></button></Link>
                  </div>
          </section>
      )
  }
}
