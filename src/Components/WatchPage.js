import { useDispatch, useSelector} from "react-redux";
import { useSearchParams } from "react-router-dom"
import { closeMenu } from "../redux_store_slices/generalSlice";
import { setVideo } from "../redux_store_slices/historySlice";
import { useEffect, useState } from "react";
import { YT_VIDEO_DETAIL_API } from "../Utils/common";
import Skeleton from "./Skeleton";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    
    const [videoDetail,SetVideoDetail] = useState([]);
    const dispatch = useDispatch()
    const historyVideo = useSelector((state)=>state.history.videos)

    useEffect(()=>{
        videoDetails()
        dispatch(closeMenu())
        dispatch(setVideo(searchParams.get('v')))
    },[])

    const [searchParams] = useSearchParams();
    const YT_VID = YT_VIDEO_DETAIL_API.replace("[ID]",searchParams.get("v"));
    //console.log(historyVideo);
    ///console.log("dfgh");
    

    const videoDetails = async() => {
        const response = await fetch(YT_VID);
        const json = await response.json()
        SetVideoDetail(json.items)
    }

    if(videoDetail.length===0)
        return <Skeleton/>
    
    
    return(
        <div className="flex flex-col w-full">
            <div className="w-full">
                <div className="flex gap-2 w-full">
                    <iframe 
                        width="1200" 
                        height="315" 
                        src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                        title="YouTube video player"
                    />
                    <div className="w-full">
                        <LiveChat/>
                    </div>
                </div>
                <div>
                    <h1 className="p-2 font-bold">{videoDetail[0].snippet.title}</h1>
                    <h1 className="p-2 font-light">{videoDetail[0].snippet.channelTitle}</h1>
                </div>
            </div>
            <div className="p-2 w-full">
                <Comments/>
            </div>
        </div>
    )
}

export default WatchPage