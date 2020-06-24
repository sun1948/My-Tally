import React, { useState } from 'react';
import {Wrapper} from 'views/Money/NumberPad/Wrapper';
import {generateOutput} from 'views/Money/NumberPad/generateOutput';

type Props = {
  value:number;
  onChange:(output:number)=>void;
  onOk?:()=>void;
}
const NumberPadSection: React.FC<Props> = (props) => {
  const [output,_setOutput] = useState<string>(props.value.toString());
  const setOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 16) {
      newOutput = output.slice(0,16);
    }else if(output.length === 0){
      newOutput = '0';
    }else{
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };
  const onClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    if(text === 'ok'){
      props.onOk && props.onOk();
      _setOutput('0');
      return;
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