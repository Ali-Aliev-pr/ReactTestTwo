import React from 'react';
import ReactDOM from 'react-dom';
import Analougas from './analougas';
import './index.css';

const blockStyle = {
  backgroundColor: '#25E7C3'
}

const analofousColor = ['#25AAE7', '#2549E7']

ReactDOM.render(
  <div className="father">
    <h1>Main Color</h1>
    <div className="block" style={blockStyle}></div>
    <p className="text">#25E7C3</p>
    {analofousColor.map(function(ex) {
      return <Analougas color={ex}></Analougas>
    })}
  </div>,
  document.querySelector("[data-type=\"root\"]")
);