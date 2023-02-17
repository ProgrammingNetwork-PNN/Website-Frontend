import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/view/NavBar/NavBar";
import GuestLandingPage from "./components/view/LandingPage/GuestLandingPage";
import EtcPage from "./components/view/LandingPage/sections/EtcPage/EtcPage";
import TeamProjectPage from "./components/view/LandingPage/sections/TeamProjectPage/TeamProjectPage";
import SeminaPage from "./components/view/LandingPage/sections/SeminaPage/SeminaPage";
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
