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
                
                               
                <ScrollPage style={{height:500}}>
                    <Animator
                        animation={batch(Move(0,500),Fade(), Sticky(50,60), MoveOut(0, 20))}
                    >
                        <p className="activity">Activity</p>

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
            <div className="Lecture" >
                <h2>원하는 인터넷 강의</h2>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            style={{ height: "33vmax", width: "30vmax" }}
                            className="d-block w-100"
                            src="images/React.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>React</h3>
                            <p className="description">
                                React 뿐만 아니라 Vue나 자바스크립트등 같이
                                공부할수있습니다.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "33vmax", width: "30vmax" }}
                            className="d-block w-100"
                            src="images/Spring.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Spring boot</h3>
                            <p className="description">
                                Spring 뿐만 아니라 django, Node.js 등 같이
                                공부할수있습니다.{" "}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "33vmax", width: "30vmax" }}
                            className="d-block w-100"
                            src="images/Study.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3> 다른 개발언어를 배우고싶다면? </h3>
                            <p className="description">
                                팀장님에게 문의해주세요.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <br />
            <div className="mt">
                <h2>기타 활동</h2>
                <div className="mt-element">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mt2020"
                    >
                        <SwiperSlide>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/pnnPicture.jpg"
                                }
                                style = {{paddingTop: '3vmax',width: "27vmax", height: "15vmax"}}
                                
                            ></img>
                        </SwiperSlide>
                    </Swiper>
                    MT활동
                </div>
                <div className="mt-element">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mt2021"
                    >
                        <SwiperSlide>
                            <img
                                src={process.env.PUBLIC_URL + "/images/1.PNG"}
                                style = {{paddingTop: '3vmax',width: "27vmax", height: "15vmax"}}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={process.env.PUBLIC_URL + "/images/2.PNG"}
                                style = {{paddingTop: '3vmax',width: "27vmax", height: "15vmax"}}
                            ></img>
                        </SwiperSlide>
                    </Swiper>
                    튜터링 활동
                </div>
                
            </div>
            <br />
            <br />
            <div className="room">
                <h2>기타 동아리 활동</h2>
                {
                    <CardGroup>
                        <Card2>
                            <Card2.Img variant="top" src="images\seminar2.png" style={{ margin: 'auto', height: "15vmax", width: "20vmax" }} />
                            <Card2.Body>
                                <Card2.Title className="description">동아리방 사용 안내</Card2.Title>
                                <Card2.Text>
                                    < br />
                                    <span>1. P&N 동아리 방은 122-A 입니다.</span>
                                    <br></br>
                                    <span>2. 동아리 방 책꽂이에는 각 학년별로 사용할 수 있는 책이 있습니다.</span>
                                    <br></br>
                                    <span>3. 동아리 방을 들어온 기준으로 오른쪽에는 냉장고와 여러 일회용품도 있습니다.</span>
                                </Card2.Text>
                            </Card2.Body>

                        </Card2>
                        <Card2>
                            <Card2.Img variant="top" src="images\pnnPicture.jpg" style={{ margin: 'auto', height: "15vmax", width: "30vmax" }} />
                            <Card2.Body>
                                <Card2.Title> MT 및 오락 활동 안내< br /> </Card2.Title>
                                <Card2.Text>
                                <span> 1. P&N 동아리는 주로 1학기 중간 시험이 끝난 후 MT를 갑니다.</span>
                                    <br></br>
                                    <span> 2. 여러가지 방식을 통해 화합을 이룹니다. </span>
                                    <br></br>
                                    <span> 3. 여러 사람들의 의견을 모아 다른 활동 또한 추천 받습니다.</span>
                                </Card2.Text>
                            </Card2.Body>
                        </Card2>
                    </CardGroup>
                }


            </div>
        </div>
    );
}