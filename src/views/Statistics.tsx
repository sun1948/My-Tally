import Layout from 'components/Layout';
import {CategorySection} from 'views/Money/Category';
import React, {useState, ReactNode} from 'react';
import styled from 'styled-components';
import {RecordItem, useRecord} from 'hooks/useRecord';
import day from 'dayjs';
import {useTags} from 'hooks/useTags';

const Wrapper = styled.div`
  background: white;
`;
const RecordList = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 8px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
    font-size: 16px;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  padding: 8px 16px;
`;

const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records,} = useRecord();
  const {getName} = useTags();
  const selectedRecords = records.filter(r => r.category === category);
  const hash: { [Key: string]: RecordItem[] } = {};  //对象中无顺序，需要后面手动排序
  selectedRecords.map(r => {   //或者forEach(无返回值)，后者for循环
    const key = day(r.createAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  //对象转成数组 Object.entries()
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <Wrapper>
        <CategorySection value={category}
                         onChange={category => setCategory(category)}/>
      </Wrapper>

      {array.map(([date, records]) => {   //使用析构赋值
        return <>
          <Header>{date}</Header>
          <div>
            {records.map(record => {
                return <RecordList>
                  <div className="tagName oneLine">
                    {record.tagIds
                      .map(tagId => <span>{getName(tagId)}</span>)
                      .reduce((result, span, index, arr) =>
                          index < arr.length - 1 ? result.concat([span, '，']) : result.concat([span])
                        , [] as ReactNode[])
                    }
                  </div>
                  {record.note && <div className="note oneLine">
                    <span>{record.note}</span>
                  </div>}
                  <div className="amount">
                    ¥<span>{record.amount}</span>
                  </div>
                </RecordList>;
              }
            )}
          </div>
        </>;
      })}
    </Layout>
  );
};
export default Statistics;

