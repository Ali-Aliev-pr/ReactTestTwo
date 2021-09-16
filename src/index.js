import React from 'react';
import ReactDOM from 'react-dom';
import Analougas from './analougas';
import Tons from './tons';
import './index.css';

const blockStyle = {
  backgroundColor: '#25E7C3'
}

const analofousColor = ['#25AAE7', '#2549E7']
const tonsColors = ['#25E7C3', '#30DABB', '#3CCDB2']

ReactDOM.render(
  <div>
    <h1>Main Color</h1>
    <div className="first">
      <div className="block" style={blockStyle}></div>
      <p className="text">#25E7C3</p>
    </div>
    <h1>Analougas</h1>
    <div className="second">
      {analofousColor.map(function(ex) {
        return <Analougas color={ex} text={ex}></Analougas>
      })}
    </div>
    <h1>Tones</h1>
    <div className="third">
      {tonsColors.map(function(fg) {
        return <Tons colors={fg}></Tons>
      })}
    </div>
  </div>,
  document.querySelector("[data-type=\"root\"]")
);