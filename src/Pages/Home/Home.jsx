import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Featured/Featured"
import Chart from "../../Components/Chart/Chart"
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" value="32.000" percentage="120%"/>
                    <Widget type="order" value="521" percentage="40%"/>
                    <Widget type="earning" value="24.000" percentage="80%"/>
                    <Widget type="balance" value="125.000" percentage="15%"/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
            </div>
        </div>
    )
}


export default Home