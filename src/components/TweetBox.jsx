import { useState } from 'react';
import {db} from '../firebaseConfig'
import {collection, addDoc, Timestamp} from 'firebase/firestore'



const TweetBox = () => {
    const [twetContent, setTwetContent] = useState('');

    const sendTweet = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'feed'), {
                displayName: "müco",
                twetContent,
                userName: '@muccorn',
                created: Timestamp.now(),
                avatar:'https://pbs.twimg.com/profile_images/1297742680219410432/sZxReosr_400x400.jpg'
            })
        } catch (err) {
            console.log(err)
        }
        setTwetContent(' ')
    }
    return (
        <div className='flex-1 pt-4 pl-2'>
            <textarea placeholder='Neler Oluyor?' className='placeholder-gray-light text-xl	w-full outline-none resize-none ' onChange={(e) => setTwetContent(e.target.value)} value={twetContent} />
            <button className='bg-primary-base rounded-full p-2 text-white hover:bg-slate-400' onClick={sendTweet}>
                tweet
            </button>
        </div>
    )
}

export default TweetBox