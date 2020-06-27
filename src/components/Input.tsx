import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
> span{
    white-space: nowrap;
    margin-right: 16px;
  }
> input{
    height: 44px;
    width: 100%;
    border: none;
    background: none;
  }
`
type Props = {  //声明Input组件可以接受的参数，除了label，接受input的所有属性
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<Props> = (props)=>{
  const {label,children,...rest} = props;
  return (
    <Label>
      <span>{label}</span>
      <input {...rest}/>
    </Label>
  )
}

export {Input};
