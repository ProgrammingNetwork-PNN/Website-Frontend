import React from "react";
import "./Tpp.css";
import "swiper/swiper.css";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    StickyOut,
    Zoom,
    ZoomIn,
    ZoomOut,
} from "react-scroll-motion";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RxDotFilled } from "react-icons/rx";
import SwiperCore, {
    Autoplay,
    Pagination,
    Navigation,
    Scrollbar,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function TeamProjectPage() {
    const FadeUp = batch(Fade(), Move(), Sticky());
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
                        P & N <hr></hr>프로젝트 소개
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <Animator
                    animation={batch(Move(0, 800), Sticky(), Fade())}
                    style={{ fontSize: 30, margin: "auto" }}
                >
                    <span style={{ fontSize: 28 }}>
                        2017 학술제 1등작🥇
                        <br />
                    </span>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/team-skl/2017.png"
                        }
                        className="imgTeamProjet"
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
                        2018 학술제 1등작🥇
                        <br />
                    </span>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/team-skl/2018.png"
                        }
                        className="imgTeamProjetStudio"
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
                        2019 학술제 1등작🥇
                        <br />
                    </span>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/team-skl/2019.png"
                        }
                        className="imgTeamProjetStudio"
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
                            2022 학술제 1등작🥇
                            <br />
                        </span>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/images/team-skl/2022.png"
                            }
                            className="imgTeamProjetStudio"
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
                    <span style={{ fontSize: 30 }}>How build it?</span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator
                    animation={batch(Move(0, 800), Sticky(50, 50), Fade())}
                >
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/team-skl/logoReact.png"
                        }
                        className="imgTeamLogo"
                    />
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/team-skl/logoSpring.png"
                        }
                        className="imgTeamLogos"
                    />
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/team-skl/logoUnity.png"
                        }
                        className="imgTeamLogos"
                    />
                    <span style={{ fontSize: 25 }}>
                        <br />
                        리액트 스프링 유니티를 활용한
                        <br /> 웹 앱 게임 개발
                    </span>
                    <hr />
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/team-skl/logoNotion.png"
                        }
                        className="imgTeamLogo"
                    />
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/team-skl/logoSlack.png"
                        }
                        className="imgTeamLogoslack"
                    />
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/team-skl/logoGit.png"
                        }
                        className="imgTeamLogo"
                    />

                    <span style={{ fontSize: 25 }}>
                        <br />
                        실무에서 활용되는 <br /> 노션 깃허브 슬랙를 통한 협업
                    </span>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    );
}

export default TeamProjectPage;
