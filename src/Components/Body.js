import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"

const Body = () => {
    return (
    <div className="flex justify-normal w-full">
        <SideBar/>
        <Outlet/>
    </div>
    )
}

export default Body