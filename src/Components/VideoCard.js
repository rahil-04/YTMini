import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {thumbnails,title,channelTitle} = snippet;
    const {viewCount} = statistics;
    return (
        <div className='p-2 m-2 w-72 rounded-lg'>
            <img className='rounded-xl' src={thumbnails.medium.url} alt='thumbnail'/>
            <ul>
                <li className='font-bold'>{title}</li>
                <li className='font-light'>{channelTitle}</li>
                <li className='font-light'>{viewCount} Views • Streamed 1h ago</li>
            </ul>
        </div>
  )
}

export default VideoCard
