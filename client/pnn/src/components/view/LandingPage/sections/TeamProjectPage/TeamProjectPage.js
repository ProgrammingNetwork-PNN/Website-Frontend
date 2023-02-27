/* eslint-disable */
import React from "react";
import "./Tpp.css";
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function TeamProjectPage() {
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
                    <div style={{ fontSize: 40 }}>
                        P & N <hr style={{ height: "10px" }}></hr>프로젝트 소개
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <Animator
                    animation={batch(Move(0, 800), Sticky(), Fade())}
                    style={{ fontSize: 30, margin: "auto" }}
                >
                    <span style={{ fontSize: 28 }}>
                        2017 학술제&nbsp; 1등작🥇
                        <br />
                    </span>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/Team-skl/2017.png"
                        }
                        style={{ width: "16vmax", height: "22vmax" }}
                        className="imgTeamProjet"
                        alt="2017학술제"
                    ></img>
                    <br />
                    Inje Campus Life
                    <hr />
                    <span style={{ fontSize: 25 }}>
                        인제대 학생을 위한 <br />
                        정보제공 안드로이드 앱
                    </span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator
                    animation={batch(Move(0, 800), Sticky(), Fade())}
                    style={{ fontSize: 30, margin: "auto" }}
                >
                    <span style={{ fontSize: 28 }}>
                        2018 학술제&nbsp; 1등작🥇
                        <br />
                    </span>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/Team-skl/2018.png"
                        }
                        style={{ width: "28vmax", height: "20vmax" }}
                        className="imgTeamProjetStudio"
                        alt="2018학술제"
                    ></img>
                    <br />
                    P&N Studio
                    <hr />
                    <span style={{ fontSize: 25 }}>
                        온라인 스트리밍이 가능한 <br />웹 프로그램
                    </span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator
                    animation={batch(Move(0, 800), Sticky(), Fade())}
                    style={{ fontSize: 30, margin: "auto" }}
                >
                    <span style={{ fontSize: 28 }}>
                        2019 학술제&nbsp; 1등작🥇
                        <br />
                    </span>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/Team-skl/2019.png"
                        }
                        className="imgTeamProjetStudio"
                        alt="2019학술제"
                    ></img>
                    <br />
                    <div
                        className="marsGradation"
                        style={{ marginTop: -25, marginBottom: 15 }}
                    >
                        MARS
                    </div>
                    <span style={{ fontSize: 30 }}> Manage AR System</span>
                    <hr />
                    <span style={{ fontSize: 25 }}>
                        증강현실 개발 및<br /> AR 웹 서비스 연구
                    </span>
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <Animator
                    animation={batch(Move(0, 800), Sticky(), Fade())}
                    style={{ fontSize: 30, margin: "auto" }}
                >
                    <div>
                        <span style={{ fontSize: 28, height: "50%" + 50 }}>
                            2022 학술제&nbsp; 1등작🥇
                            <br />
                        </span>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/images/Team-skl/2022.png"
                            }
                            className="imgTeamProjetStudio"
                            alt="2022학술제"
                            style={{ width: "30vmax", height: "18vmax" }}
                        ></img>
                        <br />
                        <div>P&N Shooter</div>
                        <hr />
                        <span style={{ fontSize: 25 }}>
                            VR 기기를 이용한 FPS 게임 개발
                        </span>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Move(0, 800), Sticky(50, 30))}>
                    <span style={{ fontSize: 30, fontWeight: 800 }}>
                        How build it?
                    </span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator
                    animation={batch(Move(0, 800), Sticky(50, 50), Fade())}
                >
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/Team-skl/logoReact.png"
                        }
                        className="imgTeamLogo"
                        alt="react"
                    />
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/Team-skl/logoSpring.png"
                        }
                        className="imgTeamLogos"
                        alt="spring"
                    />
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/Team-skl/logoUnity.png"
                        }
                        className="imgTeamLogos"
                        alt="unity"
                    />
                    <span style={{ fontSize: 22 }}>
                        <br />
                        리액트 스프링 유니티를 활용한
                        <br /> 웹 앱 게임 개발
                    </span>

                    <div
                        style={{ paddingBottom: "3vmax", paddingTop: "3vmax" }}
                    >
                        <MoreVertIcon style={{ fontSize: "5vmax" }} />
                    </div>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/Team-skl/logoNotion.png"
                        }
                        className="imgTeamLogo"
                        alt="notion"
                    />
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/Team-skl/logoSlack.png"
                        }
                        className="imgTeamLogoslack"
                        alt="slack"
                    />
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/Team-skl/logoGit.png"
                        }
                        className="imgTeamLogo"
                        alt="git"
                    />

                    <span style={{ fontSize: 22 }}>
                        <br />
                        실무에서 활용되는 <br /> 노션 깃허브 슬랙을 통한 협업
                    </span>
                    <br />
                    <br />
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    );
}

export default TeamProjectPage;
