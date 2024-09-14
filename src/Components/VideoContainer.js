import { useEffect} from "react";
import { YT_VIDEO_API } from "../Utils/common"
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import Skeleton from "./Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../redux_store_slices/videoListSLice";

const VideoContainer = ()=>{
    
    const dispatch = useDispatch();
    const videoData = useSelector((state)=>state.videoList.video)

    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
        const data = await fetch(YT_VIDEO_API);
        const json = await data.json();
        dispatch(setVideos(json.items))
    }

    if(videoData.length===0)
        return <Skeleton/>

    return(
        <div className="flex flex-wrap grow justify-start">
            {videoData.map((video)=>(
                <div key={video.id}>
                    <Link to={`/watch?v=${video.id}`}>
                        <VideoCard info={video}/>
                    </Link>
                </div>))}
        </div>
    )
}

export default VideoContainer