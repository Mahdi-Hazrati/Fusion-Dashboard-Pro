import React from "react";
import "./home.scss"
import Sidebar from "../../Components/Sidebar/Sidebar"

const Home = () => {
    return (
        <div className="home">
            <h1 className="title">Home</h1>
            <Sidebar />
        </div>
    )
}


export default Home