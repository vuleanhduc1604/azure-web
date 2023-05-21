import React from 'react';
import image from '/Image.png'
import '../../css/card.css'
const Newscard = () => {
    return (
        <div className="bg-white rounded-t-3xl shadow-lg border border-gray-300 hover-shadow">
          <img src={image} alt="" className="w-full" />
          <div className="px-6">
            
            <h2 className="text-2xl font-bold my-4">Box 1</h2>
            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, facilisis turpis vitae, consequat mauris.</p>
          </div>
        </div>
    );
};

export default Newscard;