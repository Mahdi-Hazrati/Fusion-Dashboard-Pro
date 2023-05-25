// ----------------- React --------------------
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ----------------- Pages --------------------
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login"
import List from "../../Pages/List/List"
import Single from "../../Pages/Single/Single"
import New from "../../Pages/New/New"
// ---------------- Components ----------------
// --------------=-- Styles -------------------
import "./app.scss"
import "../../Global/Reset.scss"
import "../../Global/Dark_Mode.scss"
import "../../Global/RTL_Persian.scss"
// --------------------------------------------


function App() {
    return (
    <div className="app dark rtl">
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
               </Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
