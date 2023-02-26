import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/view/NavBar/NavBar.js";
import GuestLandingPage from "./components/view/LandingPage/GuestLandingPage.js";
import EtcPage from "./components/view/LandingPage/sections/EtcPage/EtcPage.js";
import TeamProjectPage from "./components/view/LandingPage/sections/TeamProjectPage/TeamProjectPage.js";
import SeminaPage from "./components/view/LandingPage/sections/SeminaPage/SeminaPage.js";
function App() {
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
                <Route path="/etc" element={<EtcPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
