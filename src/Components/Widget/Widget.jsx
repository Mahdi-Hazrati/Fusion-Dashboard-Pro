import "./widget.scss"
import {
    AccountBalanceWallet,
    InsertEmoticon,
    KeyboardArrowUp,
    MonetizationOn,
    Person,
    ShoppingCart
} from "@mui/icons-material"

const Widget = ({type, value , percentage})=>{
    let data

    switch(type){
        case "user":
            data = {
                title:"users",
                isMoney:false,
                link:"see all users",
                icon:<Person className="icon" style={{color:"crimson", backgroundColor:"rgba(255, 0, 0, 0.2)"}} />
            }
            break
        case "order":
            data = {
                title:"orders",
                isMoney:false,
                link:"view all orders",
                icon:<ShoppingCart className="icon" style={{color:"goldenrod", backgroundColor:"rgba(218, 165, 32, 0.2)"}} />
            }
            break
        case "earning":
            data = {
                title:"earnings",
                isMoney:true,
                link:"view net earning",
                icon:<MonetizationOn className="icon" style={{color:"green", backgroundColor:"rgba(0, 128, 9, 0.2)"}} />
            }
            break
        case "balance":
            data = {
                title:"balance",
                isMoney:true,
                link:"see more details",
                icon:<AccountBalanceWallet className="icon" style={{color:"purple", backgroundColor:"rgba(128, 0, 128, 0.2)"}} />
            }
            break
        default:
            data = {
                title:"{Error}",
                isMoney:false,
                link:"Not Valid type",
                icon:<InsertEmoticon className="icon" style={{color:"white", backgroundColor:"rgba(0, 0, 0, 0.2)"}} />
            }
            break

    }

    return (
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">{data.isMoney && "$"}{value}</div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {percentage}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget