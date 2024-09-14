import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const menu = useSelector((store)=>store.general.isMenuOpen);
    
    if(!menu) 
        return null;

    return(
        <div className="fixed bg-slate-200 z-10 mt-[55px]">
            <div className="shadow-md w-56 h-[100vh] flex flex-col items-center shrink-0">
                <ul className="p-2 mt-2">
                    <li><Link to="/">Home</Link></li>
                    <li>Shorts</li>
                    <li>Library</li>
                    <li><Link to="/history">History</Link></li>
                    <li>Music</li>
                    <li>Podcast</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar