import Screen from './components/Screen';
import './App.css';
import {useState, useRef} from 'react';

function App() {
  const inputRef = useRef('');
  const [result, setResult] = useState(0);
  
  const btn = {
      zero: () => setResult(inputRef.current += '0'),
      one: () => setResult(inputRef.current += '1'),
      two: () => setResult(inputRef.current += '2'),
      three: () => setResult(inputRef.current += '3'),
      four: () => setResult(inputRef.current += '4'),
      five: () => setResult(inputRef.current += '5'),
      six: () => setResult(inputRef.current += '6'),
      seven: () => setResult(inputRef.current += '7'),
      eight: () => setResult(inputRef.current += '8'),
      nine: () => setResult(inputRef.current += '9')
  }

 const operand = {
      plus: () => setResult(inputRef.current += '+'), 
      minus: () => setResult(inputRef.current += '-'),
      times: () => setResult(inputRef.current += '*'), 
      divide: () => setResult(inputRef.current += '/')
 }

  const equalsHandler = () => {
      setResult(
          eval(inputRef.current)
      );

      inputRef.current = '';
  }

  const btnArray = new Array(10).fill(Object.keys(btn))
  const operandBtn = ['+', '-', 'x', '/']
  const operandArray = new Array(4).fill(Object.keys(operand))

  return(
      <div className="main-calc">
        <Screen text={result} />
        
          {/* Set of buttons [0-9]*/}
          {btnArray.map((item, index) => (
                  <button className="numberButtons"key={index} onClick={ btn[item.at(index)] }>{index}</button>))}

          {/* set of buttons [+, -, x, /]*/}
          {operandArray.map((item, index) => (
              <button className="operandButtons" key={index} onClick={ operand[item.at(index)] }>{operandBtn[index]}</button>))}
          <button className="equalsButton" onClick={equalsHandler}>=</button> 
      </div>
  );
}

export default App;
