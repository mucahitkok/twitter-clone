import React, { useEffect, useState } from 'react';
import TweetBox from '../components/TweetBox';
import { PopularIcon } from './Icon';
import { db } from '../firebaseConfig';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

const Content = () => {
  const [tweets, setTweets] = useState([])
  useEffect(() => {
    const q = query(collection(db, 'feed'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setTweets(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })

  }, [])
  console.log(tweets)
  return (
    <main className="border-x flex-1 ">
      <header className='sticky top-0 bg-white z-10 flex justify-between p-6 items-center border-b'>
        <span>
          <b>HOME</b>
        </span>
        <span>
          <PopularIcon className={"w-7 h-7"} />
        </span>
      </header>
      <div className='mt-3 p-2 flex'>
        <img className='w-14 h-14 rounded-full p-1' src="https://pbs.twimg.com/profile_images/1297742680219410432/sZxReosr_400x400.jpg" alt="" />
        <TweetBox />
      </div>

      


    </main>
  )
}

export default Content