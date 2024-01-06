import { useDispatch } from "react-redux";
import { Option_Logo, YT_Logo, user_logo} from "../Utils/common";
import { toggleMenu } from "../redux_store_slices/generalSlice";
import SearchBar from "./SeacrhBar";

const Head = () => {
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(toggleMenu())
    }

    return(
        <div className="grid grid-flow-col justify-between p-2 shadow-md">
            <div className="flex col-span-1">
                <img onClick={handleClick} className="w-9 p-2 m-2 cursor-pointer" src={Option_Logo} alt="option"/>
                <a href="."><img className="w-20 p-1 m-2 cursor-pointer" src={YT_Logo} alt="Youtube"/></a>
            </div>
            <SearchBar/>
            <div className="col-span-1">
                <img className="p-1 mt-2 w-10 cursor-pointer" src={user_logo} alt="user"/>
            </div>  
        </div>
    )
}

export default Head;