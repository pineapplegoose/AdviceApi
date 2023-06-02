import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import MainPage from "./mainpage";

function Nav() {
    return (
        <Router>
            <Routes>
                <Route path="/advice" element={<App />} />
                <Route exact path="/" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default Nav;
