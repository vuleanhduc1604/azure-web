import React, {useState, useEffect} from 'react';
import DatePicker from 'react-date-picker';
import axios from 'axios';
import "react-date-picker/dist/DatePicker.css";
const Addcores = () => {
   const [avatar, setAvatar] = useState('');
   const [name, setName] = useState('');
   const [stat, setStat] = useState('');
   const [contact, setContact] = useState('');
   const [link, setLink] = useState('');
    function onSubmit(e) {
        const cores = {
            avatar: avatar,
            name: name,
            stat: stat,
            contact: contact,
            link: link,
        }

        console.log(cores)

        axios.post('http://localhost:5000/cores/add', cores)
        .then(res => console.log(res.data))
    }
    return (
        <div className='bg-white pb-96 pt-96'>
      <h3>Create New Core Log</h3>
      <form onSubmit={(e) => {e.preventDefault(); onSubmit()}}>
        <div className="form-group"> 
          <label>Avatar: </label>
          <input type="text"
            value={avatar}
              required
              className="form-control"
              onChange={e => setAvatar(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Name: </label>
          <input type="text"
            value={name}
              required
              className="form-control"
              onChange={e => setName(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Stat: </label>
          <input type="text"
          value={stat}
              required
              className="form-control"
              onChange={e => setStat(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Contact: </label>
          <input type="text"
            value={contact}
              required
              className="form-control"
              onChange={e => setContact(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Link: </label>
          <input type="text"
            value={link}
              required
              className="form-control"
              onChange={e => setLink(e.target.value)}
              />
        </div>

        <div className="form-group pt-52">
          <input type="submit" value="Create Core Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    );
};

export default Addcores;