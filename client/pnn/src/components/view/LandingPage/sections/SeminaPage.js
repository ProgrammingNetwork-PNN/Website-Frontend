import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./page.css";

function SeminaPage() {
  const [cardTitle] = useState(["C/C++ Seminar", "JAVA Seminar", "DB Seminar"]);
  const [messages] = useState([
    "C/C++ 세미나를 통하여 컴퓨터공학과 신입생 분들의\n 프로그래밍 적응과 기초를 쌓아가는 시간을 가질 수 있습니다.",
    "2학년 때 배우는 객체지향 언어인 자바에 관해\n비대면 세미나를 통해 자바의 전반적인 기초적인 내용을 배웁니다.",
    "프로젝트를 설계할 때 빠질 수 없는 데이터베이스에\n관한 기초적인 내용을 DB 세미나를 통해 미리 배워볼 수 있습니다.",
  ]);
  return (
    <div>
      <h2 className="seminar">Seminar</h2>

      <div style={{ paddingLeft: "10vh", paddingRight: "10vh" }}>
        <Grid container spacing={1} style={{ borderRadius: "1000" }}>
          {messages.map((a, i) => {
            return (
              <Grid item xs={4} key={i}>
                <SeminarCard
                  cardTitle={cardTitle}
                  messages={messages}
                  i={i + 1}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

function SeminarCard(props) {
  return (
    <Card sx={{ maxWidth: 520 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={`${process.env.PUBLIC_URL}/images/seminar${props.i}.png`}
          alt={props.i}
        />
        <CardContent>
          <Typography
            className="cardTitle"
            gutterBottom
            variant="h5"
            component="div"
            fontSize="1rem"
          >
            {props.cardTitle[props.i - 1]}
          </Typography>
          <Typography variant="body2" color="#444" fontSize={"18px"}>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {props.messages[props.i - 1]}
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default SeminaPage;
