import logo from './logo.svg';
import './App.css';
import 'react-easter' ;

function App() {
  const EasterEgg = require('react-easter');
  const konamiCode = [
    'arrowup',
    'arrowup',
    'arrowdown',
    'arrowdown',
    'arrowleft',
    'arrowright',
    'arrowleft',
    'arrowright',
    'b',
    'a',
    'enter'
  ];
  return (
    
    <EasterEgg keys={konamiCode}
                 timeout={5000}>
        <div class="overlay">
          <iframe class="sexy-nude-geek-girls-playing-mario"
                  src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1"
                  frameborder="0"
                  allowfullscreen />
        </div>
      </EasterEgg>
  );
}

export default App;
