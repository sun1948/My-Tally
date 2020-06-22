import React, { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  padding: 0 16px;
  display: flex;
  align-items: center;
> span{
    font-size: 14px; line-height: 22px; color: #333333;
    white-space: nowrap;
    margin-right: 16px;
  }
> input{
    height: 73px;
    width: 100%;
    border: none;
    background: none;
  }
`
type Props = {
  label: string;
  value: string;
  type: string;
  placeholder:string;
  onChange:(value:string)=>void;
}
const Input: React.FC<Props> = (props)=>{
  const [note, setNote] = useState(props.value);
  return (
    <Label>
      <span>{props.label}</span>
      <input type={props.type} placeholder={props.placeholder}
             value={note}
             onChange={ e => {
               setNote(e.target.value);
               props.onChange(e.target.value);
             }}
      />
    </Label>
  )
}

export {Input};
