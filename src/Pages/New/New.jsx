import React, {useState} from "react"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import "./new.scss"
import noImage from "../../Assets/Images/Avatar.jpg"
import { DriveFolderUpload, PhotoCamera } from "@mui/icons-material"

const New = ()=>{
    const [file, setFile] = useState("")

    return(
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Create new user</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        {
                        file 
                        ? 
                        <img
                         alt="noimage"
                         src={URL.createObjectURL(file)}
                         /> 
                        :
                        <PhotoCamera className="icon"/>
                        }

                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="fileInput">
                                    Image <DriveFolderUpload className="icon" />
                                </label>
                                <input
                                 id="fileInput"
                                 type="file"
                                 style={{display:"none"}}
                                 onChange={(event)=>{setFile(event.target.files[0])}}
                                 />
                            </div>
                            <div className="formInput">
                                <label>username</label>
                                <input type="text" placeholder="john_doe"/>
                            </div>
                            <div className="formInput">
                                <label>First and Last </label>
                                <input type="text" placeholder="John Doe"/>
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="email" placeholder="doe@gmail.com"/>
                            </div>
                            <div className="formInput">
                                <label>phone number</label>
                                <input type="text" placeholder="+1 2345 678 9"/>
                            </div>
                            <div className="formInput">
                                <label>password</label>
                                <input type="password" placeholder="passpharse" />
                            </div>
                            <div className="formInput">
                                <label>address</label>
                                <input type="text" placeholder="no 12, nyc" />
                            </div>
                            <div className="formInput">
                                <label>country</label>
                                <input type="text" placeholder="usa" />
                            </div>
                            <button>create</button>
                        </form>
                    </div>
                </div>
            </div>p
        </div>
    )
}

export default New