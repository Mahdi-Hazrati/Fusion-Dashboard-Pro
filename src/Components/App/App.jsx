// ----------------- React --------------------
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
// ----------------- Pages --------------------
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login"
import List from "../../Pages/List/List"
import Single from "../../Pages/Single/Single"
import New from "../../Pages/New/New"
import Blank from "../../Pages/_blank/Blank";
// ---------------- Components ----------------
// --------------=-- Styles -------------------
import "./app.scss"
import "../../Global/Reset.scss"
import "../../Global/Dark_Mode.scss"
import "../../Global/RTL_Persian.scss"
// --------------------------------------------


function App() {
  const {darkmode} = useContext(DarkModeContext)

    return (
    <div className={darkmode ? "app dark" : "app"}>
        <BrowserRouter>
            <Routes>
               <Route path="/">
                <Route index element={<Home/>} />
                <Route path="login" element={<Login/>} />
                <Route path="users">
                  <Route index element={<List/>}/>
                  <Route path=":userid" element={<Single/>} />
                  <Route path="new" element={<New />} />
                </Route>
                <Route path="product">
                  <Route index element={<List/>}/>
                  <Route path=":productid" element={<Single/>} />
                  <Route path="new" element={<New />} />
                </Route>
                <Route path="/navigation" element={<Blank title={"navigation"} />} />
               </Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
