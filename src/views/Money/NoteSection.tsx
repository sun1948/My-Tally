import styled from 'styled-components';
import React from 'react';
import {Input} from 'components/Input';

const Wrapper = styled.section`
  background-color: #f5f5f5;
`;

type Props = {
  value: string;
  onChange: (newNote: string) => void;
}
const NoteSection: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Input label="备注"
             type="text"
             placeholder="请添加备注"
             value={props.value}
             onChange={props.onChange}
      />
    </Wrapper>
  );
};
export {NoteSection};
