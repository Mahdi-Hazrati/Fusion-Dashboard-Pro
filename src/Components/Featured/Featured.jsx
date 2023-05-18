import {
    MoreVert,
    KeyboardArrowDown,
    KeyboardArrowUp
} from "@mui/icons-material"
import { CircularProgressbar } from "react-circular-progressbar"
import "./CircularProgressbar.css"
import "./featured.scss"

const Featured = ()=>{
    const percentage = 82
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVert className="icon" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={5}
                    />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$400</p>
                <p className="description">
                Previous transaction in processing, last payment not included
                </p>
                <div className="summery">
                    <div className="item">
                        <div className="itemTitle">Our Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUp className="icon" />
                            <div className="resultsAmount">$120 k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDown className="icon" />
                            <div className="resultsAmount">$5.2 k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUp className="icon" />
                            <div className="resultsAmount">$32.4 k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Featured