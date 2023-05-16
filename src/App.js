import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
    return (
    <div className="app">
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
