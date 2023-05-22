import React from "react"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import DataTable from "../../Components/DataTable/DataTable"
import Chart from "../../Components/Chart/Chart"
import "./single.scss"
import profile from "../../Assets/Images/Avatar.jpg"
import {Edit} from "@mui/icons-material"

const Single = ()=>{
    return(
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton"><Edit/></div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src={profile} alt="profile" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Mahdi Hazrati</h1>
                                <div className="itemDetails">
                                    <div className="itemKey">Email</div>
                                    <div className="itemValue">Mahdi@Hazrati.com</div>
                                </div>
                                <div className="itemDetails">
                                    <div className="itemKey">Phone</div>
                                    <div className="itemValue">+98 912 0012 1212</div>
                                </div>
                                <div className="itemDetails">
                                    <div className="itemKey">Address</div>
                                    <div className="itemValue">Velenjak - NO 12</div>
                                </div>
                                <div className="itemDetails">
                                    <div className="itemKey">Country</div>
                                    <div className="itemValue">IR</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart title="Last year net-worth" aspect={3/1} />
                    </div>
                </div>
                <div className="bottom">
                <h1 className="title">Top Users</h1>
                    <DataTable/>
                </div>
            </div>
        </div>
    )
}

export default Single