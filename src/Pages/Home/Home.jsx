import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
            </div>
        </div>
    )
}


export default Home