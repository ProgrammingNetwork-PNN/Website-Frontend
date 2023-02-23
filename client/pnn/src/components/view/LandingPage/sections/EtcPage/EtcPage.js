import "./EtcPage.css";
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import "./EtcPage.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

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
                        <Card>
                            <Card.Img variant="top" src="images\seminar2.png" style={{ margin: 'auto', height: "15vmax", width: "20vmax" }} />
                            <Card.Body>
                                <Card.Title className="description">동아리방 사용 안내</Card.Title>
                                <Card.Text>
                                    < br />
                                    <p >1. P&N 동아리 방은 122-A 입니다.</p>
                                    <p >2. 동아리 방 책꽂이에는 각 학년별로 사용할 수 있는 책이 있습니다.</p>
                                    <p >3. 동아리 방을 들어온 기준으로 오른쪽에는 냉장고와 여러 일회용품도 있습니다.</p>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="images\pnnPicture.jpg" style={{ margin: 'auto', height: "15vmax", width: "30vmax" }} />
                            <Card.Body>
                                <Card.Title> MT 및 오락 활동 안내< br /> </Card.Title>
                                <Card.Text>
                                    <p> 1. P&N 동아리는 주로 1학기 중간 시험이 끝난 후 MT를 갑니다.</p>
                                    <p> 2. 여러가지 방식을 통해 화합을 이룹니다. </p>
                                    <p> 3. 여러 사람들의 의견을 모아 다른 활동 또한 추천 받습니다.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                }


            </div>
        </div>
    );
}

export default EtcPage;
