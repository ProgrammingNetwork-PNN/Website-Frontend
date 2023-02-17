import './App.css';
import { useState } from 'react';   //state가 변경될 때마다 html을 자동으로 랜더링 하기위해 import

function App() {
  let [modal, setModal] = useState(false);
  let [selectModal, setSelectModal] = useState(0);
  let [name, setName] = useState([
    "동아리 방 사용 안내",
    "MT 및 오락 활동 안내",
    "동아리 활동 안내",
  ]);               //배열 형태의 state 선언과 할당
  let [like, setLike] = useState([0, 0, 0]);
  let copyLike = [...like];
  let [plusName, setPlusName] = useState("");

  const plusLike = (e) => {
    copyLike[e]++;
    setLike(copyLike);
  }
  /*const remove = (e) => {
    copyName = [...name];
    copyName.splice(e, 1);
    copyLike = [...like];
    copyLike.splice(e, 1);
    setName(copyName);
    setLike(copyLike);
  }*/
  return (
    <div className="App">
     <header className = "App-header">P&N</header> 
     {/* <button onClick={()=> setName(copyName)}>
        버튼 1</button> */}
     <div className = "App-div">
        <div>
          <input type="text"
          onChange = {(e)=> setPlusName(e.target.value)}></input>
          <button onClick={()=>{
            setName([...name,plusName]);
            setLike([...copyLike, 0])
          }}
          ></button>
        </div>
      <h3 onClick={()=>{setModal(!modal)
                        setSelectModal(1)}}>
        {name[0]} <span onClick={() => plusLike(0)}>{"👍"+like[0]}</span>
        </h3>
        반갑습니다 P&N 입니다
      <hr></hr>
      <h3 onClick ={()=> {setModal(!modal)
                          setSelectModal(2)}}>
        {name[1]} <span onClick={() => plusLike(1)}>{"👍"+like[1]}</span>
         </h3>
         반갑습니다 P&N 입니다
      <hr></hr>
      <h3 onClick = {()=> {setModal(!modal)
                           setSelectModal(3)}}>
        {name[2]} <span onClick={() => plusLike(2)}>{"👍"+like[2]}</span>
        </h3>
         반갑습니다 P&N 입니다
      <hr></hr>
    {
      modal == true ? <Modal 글제목변경 ={setName} selectModal = {selectModal} 글제목 = {name}></Modal> : null     //모달 창 코드
    }
    </div>
    </div>    //변수 사용 시 {변수} 처럼 사용
          
  );
}
function Modal(props)  {
if(props.selectModal == 1){
  return(
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>1. P&N 동아리 방은 122-A 입니다.</p>
      <p>2. 동아리 방 책꽂이에는 각 학년별로 사용할 수 있는 책이 있습니다.</p>
      <p>3. 동아리 방을 들어온 기준으로 왼쪽에는
        냉장고와 여러 일회용품도 있습니다.</p>
        <p>(※음식 섭취 후 무조건 환기시키기)</p>
        </div>
        )
      }
        else if(props.selectModal == 2){
          return(
            <div className="modal">
            <h4>{props.글제목[1]}</h4>
            <p>1. P&N 동아리는 주로 1학기 중간 시험이 끝난 후 MT를 갑니다.</p>
            <p>2. 여러가지 방식을 통해 화합을 이룹니다.</p>
            <p>주로 컴퓨터 게임을 같이 하며 술도 많이 마신답니다 \^^/</p>
            <p>3. 여러 사람들의 의견을 모아 다른 활동 또한 추천 받습니다.</p>
              </div>
              )
        }      
        else if(props.selectModal == 3){
          return(
          <div className="modal">
            <h4>{props.글제목[2]}</h4>
            <p>1. IU-together의 프로그램을 통해 튜터링을 하며 수많은 지식을 얻을 수 있습니다.</p>
            <p>2. 컴퓨터공학과 내 동아리들과 학술제를 통해 활동을 할 수 있습니다.</p>
            <p>※참고로 P&N은 2022년도 학술제 1위를 달성하였습니다!</p>
          </div>
          )
        }

      {/* <button onClick={()=>
        {props.글제목변경([])}}>
          글 수정</button> */}
}

export default App;
