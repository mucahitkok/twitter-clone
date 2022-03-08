import React from 'react'
import FeedItem from './FeedItem'

const FeedList = ({tweets}) => {
    console.log(tweets)
  return (
    <div>
        {tweets !== [] ?
            tweets.map((item,id) => (<FeedItem key={id} {...item.data} />))
            : ''
        }
    </div>
  )
}

export default FeedList