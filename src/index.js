import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-easter"

const root = ReactDOM.createRoot(document.getElementById('root'));
const EasterEgg = require('react-easter');
const konamiCode = [
  'a','b','c'
];
root.render(
  <React.StrictMode>
    <h1>hello </h1>
     <EasterEgg keys={konamiCode}
                 timeout={500000}>
        <div class="overlay">
          <iframe class="sexy-nude-geek-girls-playing-mario"
                  src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1"
                  frameborder="0"
                  allowfullscreen />
        </div>
      </EasterEgg>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
