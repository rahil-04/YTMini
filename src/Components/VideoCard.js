import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics,contentDetails} = info;
    const {thumbnails,title,channelTitle} = snippet;
    const {viewCount} = statistics;

    const getVideoDuration = ()=>{
        const durationString = contentDetails.duration;
        const regex = /PT(?:(\d+)M)?(?:(\d+)S)?/;
        const match = durationString.match(regex);
        if(match){
            const min = parseInt(match[1])||0
            const sec = parseInt(match[2])||0;
            return(`${min}:${sec}`)
        }
    }

    const formatViews = (views) => {
        if(views<1000)
            return views;
        else if(views<1000000)
            return parseInt(views/1000) + "K"
        else if(views<1000000000)
            return parseInt(views/1000000) + "M"
        else
            return parseInt(views/1000000000) + "B"
    }

    return (
        <div className='p-2 m-2 w-72 rounded-lg'>
            <div className='relative'>
            <span className='absolute bottom-1 right-0 text-white bg-slate-800 px-1 rounded-md'>{getVideoDuration()}</span>
            <img className='rounded-xl' src={thumbnails.medium.url} alt='thumbnail'/>
            </div>
            <ul>
                <li className='font-bold'>{title}</li>
                <li className='font-light'>{channelTitle}</li>
                <li className='font-light'>{formatViews(viewCount)} Views • Streamed 1h ago</li>
            </ul>
        </div>
  )
}

export default VideoCard
