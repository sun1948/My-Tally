import React, {useState} from 'react';
import {Wrapper} from './NumberPad/Wrapper';
import {generateOutput} from './NumberPad/generateOutput';


const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0,16);
    }else if(output.length === 0){
      output = '0';
    }
    _setOutput(output);
  };
  const onClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    if(text === 'ok'){
      //TODO
      return
    }
    setOutput(generateOutput(text,output));
  };

  return (
    <Wrapper>
      <output>{output}</output>
      <div className="pad clearfix" onClick={onClick}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">ok</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};
export {NumberPadSection};