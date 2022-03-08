import React from 'react'

const FeedItem = ({avatar,displayName,twetContent,userName,created}) => {

    console.log(avatar)
  return (
    <div>
       

       <span>{twetContent}</span>
    </div>
  )
}

export default FeedItem