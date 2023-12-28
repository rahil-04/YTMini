import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"

const Body = () => {
    return (
    <div className="flex justify-normal p-4">
        <SideBar/>
        <Outlet/>
    </div>
    )
}

export default Body