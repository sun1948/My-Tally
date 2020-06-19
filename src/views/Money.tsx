import React from 'react';
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

const Money = () => {
  return (
    <MyLayout>
      <TagsSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberPadSection/>
    </MyLayout>
  );
};
export default Money;