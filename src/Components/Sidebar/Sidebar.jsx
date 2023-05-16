import "./sidebar.scss"
import {Dashboard} from "@mui/icons-material"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                    <Dashboard />
                <span className="logo">F.D Pro</span>
            </div>
            <hr />
            <div className="center">
                <ul className="menu">
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                </ul>
            </div>
            <div className="buttom">(color option)</div>
        </div>
    )
}

export default Sidebar