import { useDispatch} from "react-redux";
import { useSearchParams } from "react-router-dom"
import { closeMenu } from "../redux_store_slices/generalSlice";
import { useEffect, useState } from "react";
import { YT_VIDEO_DETAIL_API } from "../Utils/common";
import Skeleton from "./Skeleton";
import Comments from "./Comments";

const WatchPage = () => {
    
    const [videoDetail,SetVideoDetail] = useState([]);
    const dispatch = useDispatch()
    dispatch(closeMenu())

    useEffect(()=>{
        videoDetails()
    },[])

    const [searchParams] = useSearchParams();
    const YT_VID = YT_VIDEO_DETAIL_API.replace("[ID]",searchParams.get("v"));

    const videoDetails = async() => {
        const response = await fetch(YT_VID);
        const json = await response.json()
        SetVideoDetail(json.items)
    }

    if(videoDetail.length===0)
        return <Skeleton/>
    
    
    return(
        <div>
            <div>
                <iframe 
                    width="560" 
                    height="315" 
                    src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                    title="YouTube video player"
                />
                <div>
                    <h1 className="p-2 font-bold">{videoDetail[0].snippet.title}</h1>
                    <h1 className="p-2 font-light">{videoDetail[0].snippet.channelTitle}</h1>
                </div>
            </div>
            <div className="p-2">
                <Comments/>
            </div>
        </div>
    )
}

export default WatchPage