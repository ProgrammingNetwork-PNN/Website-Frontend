
import React, { useState } from "react";
import AcademicProject from "./Tpp/AcademicProject";
import WebProject from "./Tpp/WebProject";

import { ScrollContainer } from "react-scroll-motion";
import { useNavigate } from "react-router-dom";
import "./Tpp/Tpp.css";
function TeamProjectPage() {
  let navigate = useNavigate();
  let [num, setNum] = useState(0);
  return (
    <>
    <button  onClick={()=>{setNum(0)}} class="titleBt">학술제</button>   
    <button onClick={()=>{setNum(1)}} class="titleBtWeb">동아리 웹</button>
    <hr></hr>
    <TabPage tab={num}></TabPage>
    
    </>
  );
}
function TabPage(props) {
  return (
    <div>
      {props.tab == 0 ? (
        <AcademicProject></AcademicProject>
      ) : (
        <WebProject></WebProject>
      )}
    </div>
  );
}

export default TeamProjectPage;
