import React from 'react'
import { UserBoxDetailsIcon } from '../layout/Icon'

const UserBox = () => {
  return (
    <div className='flex items-center hover:bg-gray-extraLight cursor-pointer rounded-full mb-3 py-1 px-1'>
      <img className='w-14 h-14 rounded-full p-1' src="https://pbs.twimg.com/profile_images/1297742680219410432/sZxReosr_400x400.jpg" alt="" />
      <div className='flex flex-col ml-2'>
        <span className='font-bold'>müco</span>
        <span>@muccorn</span>
      </div>
      <span className='float-left ml-auto mr-2'>
        <UserBoxDetailsIcon className={"w-5 h-5"}/>
      </span>
    </div>
  )
}

export default UserBox