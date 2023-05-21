import React, {useState, useEffect} from 'react';
import DatePicker from 'react-date-picker';
import axios from 'axios';
import "react-date-picker/dist/DatePicker.css";
const Addnews = () => {
   const [username, setUsername] = useState('');
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [date, setDate] = useState('')
   const [type, setType] = useState('');
   const [img, setImg] = useState('')
    function onSubmit(e) {
        const news = {
            username: username,
            title: title,
            description: description,
            type: type,
            img: img,
        }

        console.log(news)

        axios.post('http://localhost:5000/news/add', news)
        .then(res => console.log(res.data))
    }
    return (
        <div className='bg-white pb-96'>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={(e) => {e.preventDefault(); onSubmit()}}>
        <div className="form-group"> 
          <label>Username: </label>
          <input type="text"
            value={username}
              required
              className="form-control"
              onChange={e => setUsername(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Title: </label>
          <input type="text"
            value={title}
              required
              className="form-control"
              onChange={e => setTitle(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input type="text"
          value={description}
              required
              className="form-control"
              onChange={e => setDescription(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Type: </label>
          <input type="text"
            value={type}
              required
              className="form-control"
              onChange={e => setType(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Img: </label>
          <input type="text"
            value={img}
              required
              className="form-control"
              onChange={e => setImg(e.target.value)}
              />
        </div>
        { /*
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
            showIcon
              selected={state.date}
              onChange={onChangeDate}
            />
          </div>
        </div>
        */
        }

        <div className="form-group pt-52">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    );
};

export default Addnews;