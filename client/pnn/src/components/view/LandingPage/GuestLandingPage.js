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
} from "react-scroll-motion";

import ClubMember from "./ClubMember";

const text =
    "Programming을 즐기는 네트워크라는 뜻을 가진 \n인제대학교 컴퓨터공학부 학술 동아리입니다.";

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
    const [cardTitle] = useState(["세미나", "팀프로젝트", "기타(동아리 활동)"]);
    const [card] = useState(["semina", "team", "etc"]);
    return (
        <div>
            <Intro></Intro>
            <ScrollContainer>
                {/*snap="mandatory"*/}
                <></>
                <ScrollPage>
                    <Animator
                        animation={batch(Fade(), Sticky(), MoveOut(0, 20))}
                    >
                        <p className="activity">Activity</p>

                        <div className="card">
                            <Box sx={{ flexGrow: 3 }}>
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
                <ScrollPage>
                    <ClubMember
                        title="Club Member"
                        content="This is a content"
                    />
                    <div style={{ lineHeight: "100vh" }}></div>
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
            navigate("/etc");
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