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
                {/**여기에 코드 붙이시면 됩니당.*/}
            </div>
        </div>
    );
}

export default EtcPage;
