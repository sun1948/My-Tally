import React, {useState} from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import {CategorySection} from './Money/Category';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPad';
import {TagsSection} from './Money/TagsSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type CategoryType = '-' | '+';
const Money = () => {
  const [selected, setSelected] = useState({
    tags: [] as number[],
    note: '',
    category: '-' as CategoryType,
    amount: 0
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={tags => onChange({tags})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={() => {}}/>
    </MyLayout>
  );
};
export default Money;