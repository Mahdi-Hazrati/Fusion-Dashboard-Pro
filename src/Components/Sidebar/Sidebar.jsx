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
    Psychology,
    SettingsSystemDaydream,
    NotificationsNone,
    InsertChart,
    LocalShipping
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
                <ul className="menu">
                    <li>
                        <Menu />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <Group />
                        <span>Users</span>
                    </li>
                    <li>
                        <Store />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCard />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping />
                        <span>Delivery</span>
                    </li>
                    <li>
                        <InsertChart />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNone />
                        <span>Notification</span>
                    </li>
                    <li>
                        <SettingsSystemDaydream />
                        <span>System Health</span>
                    </li>
                    <li>
                        <Psychology />
                        <span>Logs</span>
                    </li>
                    <li>
                        <Settings />
                        <span>Setting</span>
                    </li>
                    <li>
                        <AccountCircle />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToApp />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="buttom">(color option)</div>
        </div>
    )
}

export default Sidebar