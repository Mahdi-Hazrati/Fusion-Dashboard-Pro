import "./sidebar.scss"
import 
{
    Dashboard,
    Menu,
    Group,
    Store,
    CreditCard,
    ExitToApp,
    AccountCircle,
    Settings,
    SettingsSystemDaydream,
    NotificationsNone,
    InsertChart,
    LocalShipping,
    Info
} from "@mui/icons-material"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                    <Dashboard />
                <span className="logo">F.D Pro</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">main</p>
                    <li>
                        <Menu className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">list</p>
                    <li>
                        <Group className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <Store className="icon"/>
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCard className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">usefull</p>
                    <li>
                        <InsertChart className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNone className="icon"/>
                        <span>Notification</span>
                    </li>
                    <p className="title">service</p>
                    <li>
                        <SettingsSystemDaydream className="icon"/>
                        <span>Sys Health</span>
                    </li>
                    <li>
                        <Info className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <Settings className="icon"/>
                        <span>Setting</span>
                    </li>
                    <p className="title">user</p>
                    <li>
                        <AccountCircle className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToApp className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar