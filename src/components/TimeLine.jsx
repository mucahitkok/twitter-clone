import React from 'react';
import { Timeline } from 'react-twitter-widgets'


const TimeLine = () => {
    return (
        <div>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'muccorn'
                }}
                options={{
                    height: '1000'
                }}
            />
        </div>
    )
}

export default TimeLine