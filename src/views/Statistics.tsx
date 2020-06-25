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
const RecordList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 8px 16px;
  > .note{
    //margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecord();
  const {getName} = useTags();
  const selectedRecords = records.filter(r => r.category === category);
  return (
    <Layout>
      <Wrapper>
        <CategorySection value={category}
                         onChange={category => setCategory(category)}/>
        <div>
          {selectedRecords.map(r => {
            return <RecordList>
              <div className="tagName oneLine">
                <span>{r.tagIds.map(tagId => getName(tagId))}</span>
              </div>
              {r.note && <div className="note oneLine">
                <span>{r.note}</span>
              </div>}
              <div className="amount">
                ¥<span>{r.amount}</span>
              </div>
              <div className="creatAt oneLine">
                <span>{day(r.createAt).format('YYYY年MM月DD日')}</span>
              </div>
            </RecordList>;
          })}
        </div>
      </Wrapper>

    </Layout>
  );
};
export default Statistics;

