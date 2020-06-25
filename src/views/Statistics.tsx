import Layout from 'components/Layout';
import {CategorySection} from './Money/Category';
import React, {useState} from 'react';
import styled from 'styled-components';
import {useRecord} from '../hooks/useRecord';
import day from 'dayjs';
import {useTags} from '../hooks/useTags';

const Wrapper = styled.div`
  background: white;
`;
const Records = styled.div`
  
`;
const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecord();
  const {getName} = useTags();
  return (
    <Layout>
      <Wrapper>
        <CategorySection value={category}
                         onChange={category => setCategory(category)}/>
        <Records>
          {records.map(r => {
            return <div>
                     <span>{r.tagIds.map(tagId=>getName(tagId))}</span>
                     <hr/>
                     <span>{r.amount}</span>
                     <hr/>
                     <span>{day(r.createAt).format('YYYY年MM月DD日')}</span>
                   </div>
          })}
        </Records>
      </Wrapper>

    </Layout>
  );
};
export default Statistics;