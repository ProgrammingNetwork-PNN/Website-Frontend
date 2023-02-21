import "./EtcPage.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-bootstrap/Carousel";
import "./EtcPage.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function EtcPage() {
    return (
        <div className="wrap">
            <div className="Lecture">
                <h2>원하는 인터넷 강의</h2>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            style={{ height: "700px", width: "200px" }}
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
                            style={{ height: "700px", width: "200px" }}
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
                            style={{ height: "700px", width: "200px" }}
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
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mt2018"
                    >
                        <SwiperSlide>
                            <img
                                src={process.env.PUBLIC_URL + "/images/ex1.png"}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={process.env.PUBLIC_URL + "/images/ex2.png"}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/pnnPicture.jpg"
                                }
                            ></img>
                        </SwiperSlide>
                    </Swiper>
                    2018년도
                </div>
                <div className="mt-element">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mt2019"
                    >
                        <SwiperSlide>
                            <img
                                src={process.env.PUBLIC_URL + "/images/ex1.png"}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={process.env.PUBLIC_URL + "/images/ex2.png"}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/pnnPicture.jpg"
                                }
                            ></img>
                        </SwiperSlide>
                    </Swiper>
                    2019년도
                </div>
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
                                src={process.env.PUBLIC_URL + "/images/ex1.png"}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={process.env.PUBLIC_URL + "/images/ex2.png"}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/pnnPicture.jpg"
                                }
                            ></img>
                        </SwiperSlide>
                    </Swiper>
                    2020년도
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
                                src={process.env.PUBLIC_URL + "/images/ex1.png"}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={process.env.PUBLIC_URL + "/images/ex2.png"}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/pnnPicture.jpg"
                                }
                            ></img>
                        </SwiperSlide>
                    </Swiper>
                    2021년도
                </div>
                <div className="mt-element">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mt2022"
                    >
                        <SwiperSlide>
                            <img
                                src={process.env.PUBLIC_URL + "/images/ex1.png"}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={process.env.PUBLIC_URL + "/images/ex2.png"}
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/pnnPicture.jpg"
                                }
                            ></img>
                        </SwiperSlide>
                    </Swiper>
                    2022년도
                </div>
            </div>
            <br />
            <br />
            <div className="room">
                <h2>동아리 방 사용</h2>

                {<Carousel fade>
                    <Carousel.Item>
                        <p>1. P&N 동아리 방은 122-A 입니다.</p>
                        <p>2. 동아리 방 책꽂이에는 각 학년별로 사용할 수 있는 책이 있습니다.</p>
                        <p>3. 동아리 방을 들어온 기준으로 왼쪽에는
                            냉장고와 여러 일회용품도 있습니다.</p>
                        <p>(※음식 섭취 후 무조건 환기시키기)</p>
                        <Carousel.Caption>
                            <h3>MT 및 오락 활동 안내</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p>1. P&N 동아리는 주로 1학기 중간 시험이 끝난 후 MT를 갑니다.</p>
                        <p>2. 여러가지 방식을 통해 화합을 이룹니다.</p>
                        <p>주로 컴퓨터 게임을 같이 하며 술도 많이 마신답니다 \^^/</p>
                        <p>3. 여러 사람들의 의견을 모아 다른 활동 또한 추천 받습니다.</p>
                        <Carousel.Caption>
                            <h3>동아리 활동 안내</h3>
                            <p>1. IU-together의 프로그램을 통해 튜터링을 하며 수많은 지식을 얻을 수 있습니다.</p>
                            <p>2. 컴퓨터공학과 내 동아리들과 학술제를 통해 활동을 할 수 있습니다.</p>
                            <p>※참고로 P&N은 2022년도 학술제 1위를 달성하였습니다!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                }
            </div>
        </div>
    );
}

export default EtcPage;
