import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import "./blank.scss"

const Blank = ({title}) => {
    return (
        <div className="blank">
            <Sidebar />
            <div className="blankContainer">
                <Navbar />
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Blank