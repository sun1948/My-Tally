import React, { useState } from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import {CategorySection} from './Money/Category';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPad';
import {TagsSection} from './Money/TagsSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type CategoryType = '-' | '+';
const Money = () => {
  const [selected,setSelected] = useState({
    tags:[] as string[],
    note:'',
    category:'-' as CategoryType,
    number:0
  })
  return (
    <MyLayout>
      {selected.tags.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.number}
      <TagsSection value={selected.tags}
                   onChange={(tags)=>{setSelected({
                     ...selected,
                     tags:tags
                   })}}/>
      <NoteSection value={selected.note}
                   onChange={(note)=>{setSelected({
                     ...selected,
                     note:note
                   })}}/>
      <CategorySection value={selected.category}
                       onChange={(category)=>{setSelected({
                         ...selected,
                         category:category
                       })}}/>
      <NumberPadSection value={selected.number}
                        onChange={number=>{setSelected({
                          ...selected,
                          number:number
                        })}}
                        onOk={()=>{}}/>
    </MyLayout>
  );
};
export default Money;