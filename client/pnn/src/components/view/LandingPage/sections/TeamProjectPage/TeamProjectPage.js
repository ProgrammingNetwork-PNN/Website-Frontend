
import React from "react";
import "./Tpp.css";
import "swiper/swiper.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function TeamProjectPage() {
 
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
      <ScrollContainer>
 
        <ScrollPage style={{backgroundColor:"cornflowerblue",
        color:"white"}}>
          <a name="test"/>
          <Animator animation={batch(Move(0,500),Fade(), Sticky(50,50),  MoveOut(0,-400))}>
            <div style={{fontSize:30}}>P & N <hr></hr>프로젝트 소개</div>
          </Animator>
        </ScrollPage>
        
        <ScrollPage>
          <Animator animation={batch(Move(0,800),Sticky(),Fade())}style={{fontSize:40, margin:"auto"}}>
            <span style={{fontSize:28}}>2017 학술제 1등작🥇<br/></span>
             <img src={process.env.PUBLIC_URL +"/images/team-skl/2017.png"} className="imgTeamProjet">
          </img><br/>
          InJe Campus Life
           <hr/>
           <span style={{fontSize:25}}>인제대 학생을 위한 <br/>정보제공 안드로이드 앱</span>
            
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Move(0,800),Sticky(),Fade())}style={{fontSize:40, margin:"auto"}}>
            <span style={{fontSize:28}}>2018 학술제 1등작🥇<br/></span>
             <img src={process.env.PUBLIC_URL +"/images/team-skl/2018.png"} className="imgTeamProjetStudio">
          </img><br/>
          P&N Studio
           <hr/>
            <span style={{fontSize:25}}>온라인 스트리밍이 가능한 <br/>웹 프로그램</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Move(0,800),Sticky(),Fade())}style={{fontSize:40, margin:"auto"}}>
            <span style={{fontSize:28}}>2019 학술제 1등작🥇<br/></span>
             <img src={process.env.PUBLIC_URL +"/images/team-skl/2019.png"} className="imgTeamProjetStudio">
          </img><br/>
          <div className="marsGradation">MARS</div>
           PROJECT
           <hr/>
           <span style={{fontSize:25}}>Manage AR System<br/>증강현실 개발 및<br/> AR 웹 서비스 연구</span>  
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Move(0,800),Sticky(),Fade())}style={{fontSize:40, margin:"auto"}}>
            <span style={{fontSize:28}}>2022 학술제 1등작🥇<br/></span>
             <img src={process.env.PUBLIC_URL +"/images/team-skl/2022.png"} className="imgTeamProjetStudio">
          </img><br/>
          <div>P&N Shooter</div>
           <hr/>
           <span style={{fontSize:25}}>VR 기기를 이용한 게임 개발<br/>동아리방에서 함께 즐겨요</span>  
          </Animator>
        </ScrollPage>
      </ScrollContainer>

  );
}


export default TeamProjectPage;
