import React, { useState } from "react";
import "./Landing.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
    GroupsOutlined,
    SchoolOutlined,
    MoreHorizOutlined,
} from "@mui/icons-material";
//import RecordVoice, SpatialAudio
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    MoveOut,
    Sticky,
    Fade,
    FadeOut,
    Move,
} from "react-scroll-motion";

import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import CardGroup from 'react-bootstrap/CardGroup';
import Card2 from 'react-bootstrap/Card';
import { height } from "@mui/system";


const text =
    "Programming을 즐기는 Network라는 뜻을 가진 \n인제대학교 컴퓨터공학부 학술 동아리입니다.";

function Intro() {
    return (
        <div className="bg">
            <video className="video" autoPlay loop muted>
                <source src={process.env.PUBLIC_URL + "/images/file.mp4"} />
            </video>
            <div
                className="text"
                style={{ color: "#222", fontSize: "3rem", textAlign: "left" }}
            >
                P&N<p className="subTitle">{text}</p>
            </div>
            <div className="text1">둘러보기 ▼</div>
        </div>
    );
}

function GuestLandingPage() {
    const [img] = useState(["세미나.png", "coding.jpg", "onlineLecture.jpg"]);
    const [cardTitle] = useState(["세미나", "팀프로젝트", "멤버 소개"]);
    const [card] = useState(["semina", "team", "etc"]);
    return (
        <div>
            <ScrollContainer>
            <Intro></Intro>
            <EtcPage />
            
                {/*snap="mandatory"*/}
                <></>
                
                               
                <ScrollPage style={{height:3000}}>
                    <Animator
                        animation={batch(Move(),Fade(), Sticky(50,60), MoveOut(0, 0))}
                    >

                        <div className="card">
                            <Box>
                                <Grid container spacing={4}>
                                    {card.map((a, i) => {
                                        return (
                                            <Grid
                                                item
                                                lg={4}
                                                md={4}
                                                xs={4}
                                                key={i}
                                            >
                                                <GuestCard
                                                    cardTitle={cardTitle}
                                                    img={img}
                                                    i={i}
                                                />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Box>
                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>

        </div>
    );
}

export default GuestLandingPage;


function GuestCard(props) {
  let navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea
        onClick={() => {
          if (props.i === 0) {
            navigate("/semina");
          } else if (props.i === 1) {
            navigate("/teamProject");
          } else if (props.i === 2){
            navigate("/member");
          } else {
            navigate(
              "/etc2"
            );
          }
        }}
      >
        {props.i === 0 ? (
          <SchoolOutlined style={{ fontSize: "7vmax" }} />
        ) : null}
        {props.i === 1 ? (
          <GroupsOutlined style={{ fontSize: "7vmax" }} />
        ) : null}
        {props.i === 2 ? (
          <MoreHorizOutlined style={{ fontSize: "7vmax" }} />
        ) : null}

        <CardContent>
          <p className="cardTitle">{props.cardTitle[props.i]}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function EtcPage() {
    return (
        <div className="wrap" style={{ paddingLeft: "9vmax", paddingRight: "9vmax", }}>
            <br />
            <br />
            <p className="activity">Activity</p>
            
            <h1>오직 122-A에서만..!</h1>
            <br />
            <br />
            <div className="room">

                {
                    <CardGroup>
                        <Card2>
                            
                            <Card2.Body>
                                <Card2.Title className="description"></Card2.Title>
                                <Card2.Text>
                                   
                                </Card2.Text>
                            </Card2.Body>

                        </Card2>
                        <Card2>
                            
                            <Card2.Body>
                                <Card2.Title></Card2.Title>
                                <Card2.Text>
                                
                                </Card2.Text>
                            </Card2.Body>
                        </Card2>
                    </CardGroup>
                }


            </div>
        </div>
    );
}