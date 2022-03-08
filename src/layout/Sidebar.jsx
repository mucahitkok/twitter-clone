import React,{useState} from 'react';
import SideLink from '../components/SideLink';
import UserBox from '../components/UserBox';
import twitterlogo from "../images/twlog.svg"
import { HomeIcon, ExploreIcon, NotificationIcon, MessagesIcon, BookmarksIcon, ListsIcon, ProfileIcon, MoreIcon } from "./Icon"

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon
  },
  {
    name: 'Explore',
    icon: ExploreIcon
  },
  {
    name: 'Notification',
    icon: NotificationIcon
  },
  {
    name: 'Messages',
    icon: MessagesIcon
  },
  {
    name: 'Bookmarks',
    icon: BookmarksIcon
  },
  {
    name: 'Lists',
    icon: ListsIcon
  },
  {
    name: 'Profile',
    icon: ProfileIcon
  },
  {
    name: 'More',
    icon: MoreIcon
  }
]


const Sidebar = () => {
  const [active, setActive] = useState('Home');
  const handleActiveLink = (name) => {
    setActive(name)
  }
  return (
    <div className="w-64 flex flex-col justify-between p-2 h-screen sticky top-0">

      <div className="">
        <div className='hover:bg-gray-extraLight flex items-center w-12 h-12 justify-center rounded-full' >
          <img className='w-9 h-9 cursor-pointer' src={twitterlogo} alt="Twitter Logo" />
        </div>
        <nav>
          <ul>
            {
              sideLinks.map(({name,icon}) => (<SideLink key={name} Icon={icon} name={name} active={active} handleActiveLink={handleActiveLink} />))
            }
          </ul>
        </nav>
        <button className='bg-primary-base rounded-full py-3 px-5 text-white w-full shadow-lg hover:bg-primary-dark'>Tweetle</button>
      </div>

      <UserBox />
    </div>
  )
}

export default Sidebar