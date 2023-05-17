import "./widget.scss"
import { KeyboardArrowUp, Person } from "@mui/icons-material"

const Widget = ()=>{
    return (
        <div className="widget">
            <div className="left">
                <div className="title">users</div>
                <div className="counter">12.000</div>
                <div className="link">See all users</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    80%
                </div>
                <Person  className="icon"/>
            </div>
        </div>
    )
}

export default Widget