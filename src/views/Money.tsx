import React, {useState} from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import {CategorySection} from './Money/Category';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPad';
import {TagsSection} from './Money/TagsSection';
import {useRecord} from 'hooks/useRecord';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type CategoryType = '-' | '+';
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as CategoryType,
  amount: 0
};
const Money = () => {
  console.log('money');
  const [selected, setSelected] = useState(defaultFormData);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const {addRecord} = useRecord();
  const submit = () => {
    if (selected.tagIds.length === 0) {
      alert('请选择标签');
      return;
    }
    addRecord(selected);
    alert('记账成功');
    setSelected(defaultFormData);
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>
  );
};
export default Money;