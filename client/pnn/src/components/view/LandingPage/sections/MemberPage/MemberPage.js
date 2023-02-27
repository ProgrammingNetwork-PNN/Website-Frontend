/* eslint-disable */
import React, { useState } from "react";
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
import "./MemberPage.css";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const text = "동아리\n멤버 소개";
function MemberPage(props) {
    const [member] = useState(["18학번", "19학번", "20학번", "21학번"]);
    return (
        <>
            <ScrollContainer>
                <ScrollPage
                    style={{
                        backgroundColor: "cornflowerblue",
                        color: "white",
                    }}
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
                            P & N <hr style={{ height: "10px" }}></hr>
                            <p style={{ whiteSpace: "pre-wrap" }}>{text}</p>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <img
                        src={process.env.PUBLIC_URL + "/images/clubMember.png"}
                        className="member"
                    ></img>
                </ScrollPage>
            </ScrollContainer>
        </>
    );
}

export default MemberPage;
