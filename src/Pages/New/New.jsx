import React from "react"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import "./new.scss"

const New = ()=>{
    return(
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
            </div>
        </div>
    )
}

export default New