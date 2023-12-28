import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const menu = useSelector((store)=>store.general.isMenuOpen);
    
    if(!menu) 
        return null;

    return(
        <div className="shadow-md w-40 p-4">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Library</li>
                <li>History</li>
                <li>Music</li>
                <li>Podcast</li>
            </ul>
        </div>
    )
}

export default SideBar