import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "리액트";
  
  return (
  <div className="container">
    <h1 className='test'>Hello, {name === '리액트' ? (<h1>Yes</h1>) : (<h1>No</h1>)} !!</h1>
    <p>반갑습니다</p>
    {/* 주석문 작성 */}
  </div>ㅎ
  );

  // const port = 1;
  // return (
  //   <div>
  //     {
  //       port || '포트를 사용하지 않았습니다'
  //     }
  //   </div>
  // )
}

export default App;
