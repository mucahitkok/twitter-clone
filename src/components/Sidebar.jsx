import React from 'react';
import { HomeIcon, MoreIcon } from './Icon';
import twitterlogo from "../images/twlog.svg"


const Sidebar = () => {
  return (
    <div className="w-60 flex flex-col justify-between p-2">

      <div className="">
        <div className='hover:bg-gray-extraLight flex items-center w-12 h-12 justify-center rounded-full' >
        <img className='w-9 h-9 cursor-pointer' src={twitterlogo} alt="Twitter Logo"/>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Explore</li>
          </ul>
        </nav>
        <button className='bg-primary-base rounded-full py-3 px-5 text-white w-full shadow-lg hover:bg-primary-dark'>Tweetle</button>
      </div>

      <div>alt</div>
    </div>
  )
}

export default Sidebar