import { useDispatch } from "react-redux";
import { Option_Logo, YT_Logo, user_logo} from "../Utils/common";
import { toggleMenu } from "../redux_store_slices/generalSlice";

const Head = () => {
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(toggleMenu())
    }

    return(
        <div className="grid grid-flow-col justify-between p-2 shadow-md">
            <div className="flex col-span-1">
                <img onClick={handleClick} className="w-9 p-2 m-2 cursor-pointer" src={Option_Logo} alt="option"/>
                <img className="w-20 p-1 m-2 cursor-pointer" src={YT_Logo} alt="Youtube"></img>
            </div>
            <div className="">
                <input className=" p-2 mt-2 col- border border-black rounded-l-xl" type="text"/>
                <button className=" p-2 mt-2 border border-black rounded-r-xl">🔍</button>
            </div>
            <div className="col-span-1">
                <img className="w-10 cursor-pointer" src={user_logo} alt="user"/>
            </div>  
        </div>
    )
}

export default Head;