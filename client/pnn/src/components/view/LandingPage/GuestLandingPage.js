import React, { useState } from "react";
import "./Landing.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { GroupsOutlined, SchoolOutlined } from "@mui/icons-material";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import InventoryIcon from "@mui/icons-material/Inventory";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import "swiper/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
const text =
    "Programming을 즐기는 Network라는 뜻을 가진 \n인제대학교 컴퓨터공학부 학술 동아리입니다.";

function Intro() {
    return (
        <div className="bg">
            <video className="video" autoPlay loop muted>
                <source src={process.env.PUBLIC_URL + "/images/file.mp4"} />
            </video>
            <div className="text" style={{ color: "#222", textAlign: "left" }}>
                P&N<p className="subTitle">{text}</p>
            </div>
        </div>
    );
}

function GuestLandingPage() {
    const [img] = useState(["세미나.png", "coding.jpg", "onlineLecture.jpg"]);
    const [cardTitle] = useState(["세미나", "프로젝트", "멤버소개"]);
    const [card] = useState(["semina", "team", "etc"]);
    return (
        <div>
            <Intro></Intro>
            <br />
            <br />
            <br />
            <p className="activity">Activity</p>
            <EtcPage style={{ backgroundColor: "#ffffff" }} />
            <div
                className="card"
                style={{
                    margin: "auto",
                    backgroundColor: "transparent",
                    display: "flex",
                }}
            >
                <Box>
                    <Grid container spacing={4}>
                        {card.map((a, i) => {
                            return (
                                <Grid item lg={4} md={6} xs={1.3} key={i}>
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

            {/*snap="mandatory"*/}
            <br />
            <br />
            <br />
            <br />
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
                    } else if (props.i === 2) {
                        navigate("/member");
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
                    <PermIdentityIcon style={{ fontSize: "7vmax" }} />
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
        <div className="wrap" style={{ backgroundColor: "transparent" }}>
            {/*즐거운 대학생활*/}
            <div className="senpai">
                <img
                    src={process.env.PUBLIC_URL + "/images/index.png"}
                    className="index"
                    style={{ width: "22vmax", height: "4vmax" }}
                ></img>
                <span className="imgText">
                    <p className="tag">즐거운 대학생활</p>
                </span>
                <br />
                <br />
                <Carousel fade Autoplay>
                    <Carousel.Item>
                        <img
                            style={{ height: "20vmax", width: "30vmax" }}
                            src={`${process.env.PUBLIC_URL}/images/play/pnnMT.jpg`}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "20vmax", width: "30vmax" }}
                            src={`${process.env.PUBLIC_URL}/images/play/pnnFire.png`}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            style={{ height: "20vmax", width: "30vmax" }}
                            src={`${process.env.PUBLIC_URL}/images/play/pnnValley.png`}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "20vmax", width: "30vmax" }}
                            src={`${process.env.PUBLIC_URL}/images/play/pnnSki.png`}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <br />
            <br />
            {/*PNN PREMIUM*/}
            <div className="senpai">
                <span className="imgText">
                    <p className="tag" style={{ paddingTop: "2vmax" }}>
                        PNN PREMIUM
                    </p>
                </span>
                <img
                    src={process.env.PUBLIC_URL + "/images/index.png"}
                    className="index"
                    style={{ width: "22vmax", height: "4vmax" }}
                />

                <br />
                <br />
                <div className="iconGroup">
                    <div className="item">
                        <MenuBookRoundedIcon style={{ fontSize: "8vmax" }} />
                        <p>전공 책 대여</p>
                    </div>
                    <div className="item">
                        <TableRestaurantIcon style={{ fontSize: "8vmax" }} />
                        <p>개인 자리</p>
                    </div>
                    <div className="item">
                        <InventoryIcon style={{ fontSize: "8vmax" }} />
                        <p>편의 용품</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            {/*든든한 선배들(?)*/}
            <div className="senpai">
                <img
                    src={process.env.PUBLIC_URL + "/images/index.png"}
                    className="index"
                    style={{ width: "22vmax", height: "4vmax" }}
                ></img>
                <span className="imgText">
                    <p className="tag" style={{ paddingTop: "0.8vmax" }}>
                        든든한 선배들
                    </p>
                </span>
                <br />
                <br />
                <div>
                    <p># 교직과정_이수생_보유</p>
                    <p># 인턴쉽_경험자_보유</p>
                    <p># 인제대_맛집_전문가</p>
                    <p># 같이_운동할_수_있는_헬창</p>
                    <p># 항시_대기중인_각종_게임_유저</p>
                </div>
                <br />
            </div>
        </div>
    );
}