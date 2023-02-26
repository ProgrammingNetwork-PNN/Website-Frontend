import React, { useState } from "react";
import "./css/LandingMain.css";
import "swiper/swiper.css";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    Move,
    MoveOut,
    Sticky,
} from "react-scroll-motion";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Semina() {
    const [messages] = useState([
        "C/C++ 세미나를 통하여 신입생분들의\n프로그래밍 적응과 기초를 쌓아갈 수 있습니다.",
        "자바 세미나를 통하여 2학년 부원들의\n객체지향 프로그래밍 실력을 쌓아갈 수 있습니다.",
        "DB 세미나를 통하여 데이터베이스의\n설계와 기초원리를 배울 수 있습니다.",
    ]);
    return (
        <ScrollContainer>
            <ScrollPage
                style={{ backgroundColor: "cornflowerblue", color: "white" }}
            >
                <a name="test" />
                <Animator
                    animation={batch(
                        Move(0, 500),
                        Fade(),
                        Sticky(50, 50),
                        MoveOut(0, -400)
                    )}
                >
                    <div style={{ fontSize: 30 }}>
                        P & N <hr></hr>동아리 세미나
                    </div>
                </Animator>
            </ScrollPage>

            {/*****************************1******************************/}
            <section className="panel spotlight medium left">
                <div className="content span-7" style={{ border: "0" }}>
                    <h2 className="major">C/C++ Seminar</h2>
                    <img
                        width="469px"
                        height="350px"
                        src={`${process.env.PUBLIC_URL}/images/seminar1.png`}
                    ></img>
                </div>
            </section>
            <p className="myPFont">{messages[0]}</p>
            {/*****************************2******************************/}
            <section className="panel spotlight medium left">
                <div className="content span-7" style={{ border: "0" }}>
                    <h2 className="major">JAVA Seminar</h2>
                    <img
                        width="469px"
                        height="350px"
                        src={`${process.env.PUBLIC_URL}/images/seminar2.png`}
                    ></img>
                </div>
                <div
                    className="image filtered tinted"
                    data-position="top "
                ></div>
                <p className="myPFont">{messages[1]}</p>
            </section>
            {/*****************************3******************************/}
            <section className="panel spotlight medium left">
                <div className="content span-6" style={{ border: "0" }}>
                    <h2 className="major">DB Seminar</h2>
                    <img
                        width="469px"
                        height="350px"
                        src={`${process.env.PUBLIC_URL}/images/seminar3.png`}
                    ></img>
                </div>
                <div
                    className="image filtered tinted"
                    data-position="top "
                ></div>
                <p className="myPFont">{messages[2]}</p>
            </section>

            <section style={{ paddingLeft: "20px" }}></section>
        </ScrollContainer>
    );
}

export default Semina;
