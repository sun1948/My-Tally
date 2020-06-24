import React from 'react';
import {Wrapper} from './NumberPad/Wrapper';
import {generateOutput} from './NumberPad/generateOutput';

type Props = {
  value:number;
  onChange:(output:number)=>void;
  onOk?:()=>void;
}
const NumberPadSection: React.FC<Props> = (props) => {
  // console.log('刷新了');
  const output = props.value.toString();
  // console.log('新的output:'+output);
  const setOutput = (output: string) => {
    let value;
    if (output.length > 16) {
      value = parseFloat(output.slice(0,16));
    }else if(output.length === 0){
      value = 0;
    }else{
      // console.log('computed:'+output);
      value = parseFloat(output);
      // console.log('value:'+value)
    }
    props.onChange(value);
  };
  const onClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    if(text === 'ok'){
      props.onOk && props.onOk();
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