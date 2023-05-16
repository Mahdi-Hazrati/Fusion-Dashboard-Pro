import "./sidebar.scss"

const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <div className="top">
                <span className="logo">Fusion Dashboard Pro</span>
            </div>
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