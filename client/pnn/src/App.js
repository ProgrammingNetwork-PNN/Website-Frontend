import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/view/NavBar/NavBar.js";
import GuestLandingPage from "./components/view/LandingPage/GuestLandingPage.js";
import TeamProjectPage from "./components/view/LandingPage/sections/TeamProjectPage/TeamProjectPage.js";
import SeminaPage from "./components/view/LandingPage/sections/SeminaPage/SeminaPage.js";
import MemberPage from "./components/view/LandingPage/sections/MemberPage/MemberPage.js";
import Footer from "./components/view/Footer/Footer";
function App() {
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    useEffect(() => {
        setScreenSize();
    });

    return (
        <div className="App">
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<GuestLandingPage />}></Route>{" "}
                {/* 추후 path = "guest"로 바꿀 예정 */}
                <Route path="/semina" element={<SeminaPage />}></Route>
                <Route
                    path="/teamProject"
                    element={<TeamProjectPage />}
                ></Route>
                <Route path="/member" element={<MemberPage />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
