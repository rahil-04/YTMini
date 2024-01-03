import { useEffect, useState } from "react"
import { YT_SEARCH_SUGGESTION_API } from "../Utils/common";
import { useDispatch, useSelector } from "react-redux";
import { addToCache } from "../redux_store_slices/searchCacheSlice";

const SearchBar = ({searchText}) =>{
    const[suggestionList,SetsuggestionList]=useState([]);
    const showSuggestion = useSelector((state)=>state.general.showSuggestion)
    const suggestionCache = useSelector((state)=>state.searchCache)
    const dispatch = useDispatch()

    useEffect(()=>{
        const timer = setTimeout(()=> {
            if(suggestionCache[searchText]){
                SetsuggestionList(suggestionCache[searchText])
            }
            else{
                getSearchResults()
            }
        },200);
        return()=>{
            clearTimeout(timer);
        }
    },[searchText])

    const getSearchResults = async()=>{
        const response = await fetch(YT_SEARCH_SUGGESTION_API+searchText);
        const json = await response.json();
        SetsuggestionList(json[1]);
        
        //update cache
        dispatch(addToCache({
            [searchText]: json[1]
        }))
    } 
    
    return(
        <div className="absolute bg-white w-60 shadow-xl rounded-lg z-10">
            <ul>
                {showSuggestion&&suggestionList.map((res,index)=><li key={index} className="hover:bg-slate-200 cursor-default p-2">🔍{res}</li>)}
            </ul>
        </div>
    )
}

export default SearchBar