import { useEffect, useState } from "react"
import { YT_SEARCH_SUGGESTION_API,YT_SEARCH_RES_API} from "../Utils/common";
import { useDispatch, useSelector } from "react-redux";
import { addToCache } from "../redux_store_slices/searchCacheSlice";
import { setVideo } from "../redux_store_slices/searchListSlice";
import { openSuggestion,closeSuggestion } from "../redux_store_slices/generalSlice";
import { Link } from "react-router-dom";

const SearchBar = () =>{
    const[suggestionList,SetsuggestionList]=useState([]);
    const [searchQuerry,SetSearchQuerry] = useState("");
    const showSuggestion = useSelector((state)=>state.general.showSuggestion)
    const suggestionCache = useSelector((state)=>state.searchCache)
    const dispatch = useDispatch()

    useEffect(()=>{
        const timer = setTimeout(()=> {
            if(suggestionCache[searchQuerry]){
                SetsuggestionList(suggestionCache[searchQuerry])
            }
            else{
                getSearchResults()
            }
        },200);
        return()=>{
            clearTimeout(timer);
        }
    },[searchQuerry])

    const getSearchResults = async()=>{
        const response = await fetch(YT_SEARCH_SUGGESTION_API+searchQuerry);
        const json = await response.json();
        SetsuggestionList(json[1]);
        
        //update cache
        dispatch(addToCache({
            [searchQuerry]: json[1]
        }))
    } 

    const YT_SEARCH = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuerry}&key=AIzaSyBuct1MP42aAepnpTyjKlgBlZtBl5se5bg`

    const getSearchResult = async() => {
        const response = await fetch(YT_SEARCH);
        const json = await response.json();
        dispatch(setVideo(json.items));
    }
    
    return(
            <div>
                <input 
                    className=" p-2 mt-2 col- border border-black rounded-l-xl" 
                    type="text"
                    value={searchQuerry}
                    onChange={(e)=>SetSearchQuerry(e.target.value)}
                    onFocus={()=>dispatch(openSuggestion())}
                    onBlur={()=>dispatch(closeSuggestion())}
                />
                <div className="absolute bg-white w-60 shadow-xl rounded-lg z-10">
                    {showSuggestion&&suggestionList.map((res,index)=><div key={index} onMouseDown={()=>{SetSearchQuerry(res)}} className="hover:bg-slate-200 cursor-default p-2">🔍{res}</div>)}
                </div>
                <Link to={`/result?search=${searchQuerry}`}><button 
                    className=" p-2 mt-2 border border-black rounded-r-xl"
                    onClick={
                        ()=>{
                            dispatch(closeSuggestion());
                            getSearchResult();
                            console.log("clicked")
                        }
                    }
                >
                🔍
                </button></Link>
            </div>
    )
}

export default SearchBar