
import React ,{useState} from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleBackspace = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <>
    <div className="calculator">
    <input
        type="text"
        className="display screen"
        value={display}
        placeholder="0"
        readOnly
      />
    <button onClick={handleClear}className="button clear">AC</button>
  
  <button onClick={handleBackspace} className="button backspace">←</button>
 
  <button onClick={() => handleButtonClick('.')} className="button dote">.</button>
  <button onClick={() => handleButtonClick('/')} className="button operation">÷</button>
  <button onClick={() => handleButtonClick('7')} className="button">7</button>
  <button onClick={() => handleButtonClick('8')} className="button">8</button>
  <button  onClick={() => handleButtonClick('9')}className="button">9</button>
  <button onClick={() => handleButtonClick('*')} className="button operation">×</button>
  <button onClick={() => handleButtonClick('4')} className="button">4</button>
  <button onClick={() => handleButtonClick('5')} className="button">5</button>
  <button onClick={() => handleButtonClick('6')} className="button">6</button>
  <button onClick={() => handleButtonClick('-')} className="button operation">-</button>
  <button onClick={() => handleButtonClick('1')} className="button">1</button>
  <button onClick={() => handleButtonClick('2')} className="button">2</button>
  <button onClick={() => handleButtonClick('3')} className="button">3</button>
  <button  onClick={() => handleButtonClick('+')}className="button operation">+</button>
  <button onClick={() => handleButtonClick('0')} className="button">0</button>
  <button onClick={handleCalculate} className="button equal">=</button>
    </div>
    </>
  )
}

export default App
