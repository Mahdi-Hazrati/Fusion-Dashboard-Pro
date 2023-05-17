
import
{ 
    ChatBubbleOutlineRounded,
    DarkModeOutlined,
    FullscreenExitOutlined,
    LanguageOutlined,
    ListOutlined,
    NotificationsNoneOutlined,
    SearchOutlined,
} 

from "@mui/icons-material"

import "./navbar.scss"
const Navbar = ()=>{
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <SearchOutlined className="icon" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineRounded className="icon"/>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar