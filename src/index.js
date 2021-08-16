//require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import  Game  from './App';
import "./css-src/App.scss";

// const appElement = document.getElementById('app');

// ReactDOM.render(<App />, appElement);



  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
