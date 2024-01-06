import { useEffect } from "react";
import SearchResVideo from "./SearchResVideo";
import { closeMenu } from "../redux_store_slices/generalSlice";
import SearchResSkeleton from "./SearchResSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchResultContainer = ()=>{

    const dispatch = useDispatch()
    const searchResVid = useSelector((state)=>state.searchList.videos)

    useEffect(()=>{
        dispatch(closeMenu())
    },[])

    console.log(searchResVid)
    
    if(searchResVid.length === 0)
        return <SearchResSkeleton/>

    return(
        <div>
            {searchResVid.map(
                (vid)=><Link to={`/watch?v=${vid.id.videoId}`} key={vid.id.videoId||vid.id.channelId}>{vid.id.kind === "youtube#channel"?<SearchResVideo video={vid} style="rounded-full h-[136px] w-[136px]"/>:<SearchResVideo video={vid} style="w-full rounded-xl"/>}</Link> 
            )}
        </div>
    )
}

export default SearchResultContainer