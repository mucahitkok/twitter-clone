import React from 'react'
import TimeLine from '../components/TimeLine';
import { SesarchIcon } from './Icon';


const Aside = () => {
  return (
    <aside className="w-96" >
      <div className='m-3 '>
        <span className='flex w-full bg-gray-extraLight rounded-full py-3 px-3'>
          <SesarchIcon className={"w-6 h-6"}/>
          <input type="text" className='w-full outline-none bg-gray-extraLight rounded-full pl-3'/>
        </span>
      </div>

      <div>
        <TimeLine />
      </div>
    </aside>
  )
}

export default Aside