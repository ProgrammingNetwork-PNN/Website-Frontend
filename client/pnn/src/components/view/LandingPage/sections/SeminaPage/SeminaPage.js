import React, { useState } from "react";
import "./css/fontawesome-all.min.css";
import "./css/LandingMain.css";
import "./css/noscript.css";
import { useHorizontalScroll } from "./useSideScroll";

function Semina() {
  const scrollRef = useHorizontalScroll();
  const [messages] = useState([
    "C/C++ 세미나를 통하여 신입생분들의\n프로그래밍 적응과 기초를 쌓아갈 수 있습니다.",
    "자바 세미나를 통하여 2학년 부원들의\n객체지향 프로그래밍 실력을 쌓아갈 수 있습니다.",
    "DB 세미나를 통하여 데이터베이스의\n설계와 기초원리를 배울 수 있습니다.",
  ]);
  return (
    <div className="is-preload" ref={scrollRef} style={{ overflow: "auto"}}>
      <div id="page-wrapper" style={{paddingTop: '3vmax', paddingBottom: '0.5vmax'}}>
        <div id="wrapper" style={{height: "60%"}}>
          <section className="panel banner right">
            <div className="content color0 span-3-75" style={{border: '0'}}>
              <h1 className="major">
                P&N <br />
                Seminar
              </h1>
            </div>
          </section>

          {/*****************************1******************************/}
          <section className="panel spotlight medium left">
            <div className="content span-7" style={{border: '0'}}>
              <h2 className="major">C/C++ Seminar</h2>
              <img
                width="469px"
                height="350px"
                src={`${process.env.PUBLIC_URL}/images/seminar1.png`}
              ></img>
            </div>
            <div className="image filtered tinted"></div>
            <p className="myPFont">{messages[0]}</p>
          </section>
          {/*****************************2******************************/}
          <section className="panel spotlight medium left">
            <div className="content span-7" style={{border: '0'}}>
              <h2 className="major">JAVA Seminar</h2>
              <img
                width="469px"
                height="350px"
                src={`${process.env.PUBLIC_URL}/images/seminar2.png`}
              ></img>
            </div>
            <div className="image filtered tinted" data-position="top "></div>
            <p className="myPFont">{messages[1]}</p>
          </section>
          {/*****************************3******************************/}
          <section className="panel spotlight medium left">
            <div className="content span-6" style={{border: '0'}}>
              <h2 className="major">DB Seminar</h2>
              <img
                width="469px"
                height="350px"
                src={`${process.env.PUBLIC_URL}/images/seminar3.png`}
              ></img>
            </div>
            <div className="image filtered tinted" data-position="top "></div>
            <p className="myPFont">{messages[2]}</p>
          </section>

          <section style={{ paddingLeft: "20px" }}></section>
        </div>
      </div>
    </div>
  );
}

export default Semina;
