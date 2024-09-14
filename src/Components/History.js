import { useSelector } from "react-redux";
import HistoryVid from "./HIstoryVid";
import { useEffect, useState } from "react";
import SearchResSkeleton from "./SearchResSkeleton";
import { Link } from "react-router-dom";

const History = () => {
    const [historyVid,SetHistoryVid] = useState([]);
    const historyVideo = useSelector((state)=>state.history.videos)
    // console.log(historyVideo);
    // console.log("rendered")
    useEffect(()=>{
        getVideoData()
        console.log("fetch")
    },[])

    const getVideoData = async() => {
        const multipleVidID = historyVideo.join("%2C")
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${multipleVidID}&key=AIzaSyA4LM7t2WFcwFSz4dRoTpERZz8UwzRlB1w`);
        const json = await response.json();
        SetHistoryVid(json.items)
    }

    console.log(historyVid)

    if(historyVid.length === 0)
        return SearchResSkeleton

    return(
        <div className="mt-[80px]">
            {historyVid.map((vid)=>
                <Link key={vid} to={`/watch?v=${vid.id}`}><HistoryVid videoID={vid}/></Link>
            )}
        </div>
    )
}

export default History;