import styled from 'styled-components';
import React, {useRef} from 'react';

const Wrapper = styled.section`
  label{ 
    background-color: #f5f5f5;
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
  }
`;

type Props = {
  value:string;
  onChange:(newNote:string)=>void;
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = ()=>{
    if(refInput.current !== null) props.onChange(refInput.current.value);
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        {/*<input type="text" placeholder="在此添加备注"*/}
        {/*       value={note}*/}
        {/*       onChange={(e)=>{setNote(e.target.value)}}*/}
        {/*/>*/}
        <input type="text" placeholder="在此添加备注"
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}/>
      </label>
    </Wrapper>
  );
};
export {NoteSection};
