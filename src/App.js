import './App.css';
import Header from './components/Header.js';
import Modal from './components/Modal.js';
import React, { useState } from 'react';
let num14=[1,2,3,4];
function App() {
  const [titles, setTitles] = useState(['제목1','제목2','제목3','제목4']);
  const [turn, setTurn] = useState(false);
  const [modal, setModal] = useState(false);
  const [likes, setLikes] = useState([0,0,0,0]);
  const [clickedNum, setClickedNum] = useState(0);
  return (
    <div className="App">
      <Header />
      <div id="container" className={turn==true?"active":null}>
        <div id="entrance">
          <div className="left">
            <div className="top">
              {
                modal==true?<Modal titles={titles} modal={modal} setModal={setModal}/>: null
              }
              <h1>Just relax, and <br />
                write your feelings
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore eligendi saepe? Impedit sit neque culpa ullam consectetur nisi? Cumque vitae provident corrupti ex sapiente accusamus illum reiciendis recusandae doloremque.</p>
              <button className='goBtn' onClick={()=>{
                window.scrollTo({top: 1400, left: 0, behavior:'smooth'})
              }}>Write</button>
            </div>
            <div className="bottom">
              <div className="contentsbox">
                <img src={'https://picsum.photos/400/600?random=1'} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque, necessitatibus perferendis eligendi magni aut magnam quisquam harum vero iusto error, et sunt, expedita similique quos alias sapiente recusandae quod.</p>
              </div>
              <button className="detailBtn">More details</button>
            </div>
          </div>
          <div className="right">
            <ul>
            <button className='nextBtn' onClick={()=>{setTurn(!turn)}}>Next</button>
            <button className="sortBtn" onClick={()=>{
              let copied=[...titles];
              copied.sort();
              setTitles(copied);
            }}>가나다순 정렬</button>
              {
                num14.map(function (a, i) {
                  return (
                    <li key={i}>
                      <a>
                        <img src={'https://picsum.photos/400/600?random=' + a} alt="글 미리보기1" />
                        <div className="bottom">
                          <h2 onClick={()=>{
                            let copied=[...titles];
                            copied[0]='수정한 제목';
                            setTitles(copied);
                          }}>{titles[i]}</h2>
                          <div className="dateWrap">
                            <p className="date">월 일</p>
                            <span className="likes" >하트 :  {likes[i]} 개 </span>
                            <span onClick={()=>{
                              let copied=[...likes];
                              copied[i]=copied[i]+1;
                              setLikes(copied);
                            }}>🥰</span>
                          </div>
                          <button onClick={()=>{setModal(!modal)}}>수정하기</button>
                        </div>
                      </a>
                    </li>)
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;