import OrderComponent from "../Component/OrderComponent"
import ProfileComponent from "../Component/ProfileComponent"
import { useState } from "react"
export default function Dashboard() {
    const [toggle, settoggle] = useState(false)
    const HandleProfileToggle = () => {
        settoggle(true)
    }
    const HandleDasboardToggle = () => {
        settoggle(false)
    }
    const HandleLogout = () => {
        localStorage.removeItem('token')
        window.location.href ='/'
    }
    return (
        <>
            <center><button className="btn" onClick={HandleDasboardToggle}><h2>Dashboard</h2></button></center>
            <div className="dashboard-container">
                <div className="menu-sec">
                    <ul>
                        <li><h2>Setting</h2></li>
                        <li><h3><button className="btn" onClick={HandleProfileToggle}>Profile</button></h3></li>
                        <li><button className="btn btn-danger" onClick={HandleLogout}>Log out</button></li>
                    </ul>
                </div>
                <div clasName="display-sec" >
                    {
                        toggle?<ProfileComponent/>:<OrderComponent />
                    }
                </div>
            </div>
        </>
    )
}
