import React, { useState } from "react";
import "./EtcPage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
function EtcPage() {

  const [cardTitle] = useState(["기존스터디", "신규스터디"]);

  const [card] = useState(["study", "newstudy"]);
  const [img] = useState(["1.jpg", "60jpg"]);
  const text =
    "하고싶은 개발언어 공부는 여기서 \n스터디원을 모집하여 같이공부하면 됩니다.";



  return (
    <div iv className="card1">
      <div className="study">  P&N  STUDY</div>
      <hr />
      <p className="study1"> {text} </p>
      <br />

      <div className="card">
        <Box sx={{ flexGrow: 2 }} alignItems="center" alignContent="center">
          <Grid container spacing={5}>
            {card.map((a, i) => {
              return (
                <Grid item xs={4} key={i}>
                  <GuestCard cardTitle={cardTitle} img={img} i={i}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>



  );
}

export default EtcPage;

function GuestCard(props) {
  let navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea
        onClick={() => {
          if (props.i === 0) {
            navigate("/study");

          } else {
            navigate("/newstudy");
          }
        }}
      >

        <CardMedia
          component="img"
          height="250"
          image={`${process.env.PUBLIC_URL}/images/${props.img[props.i]}`}
          alt="card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cardTitle[props.i]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            공부하고 싶은 개발언어가 무엇인가요?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
