import Layout from 'components/Layout';
import React from 'react';
import {Topbar} from 'components/Topbar';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from 'components/Space';
import {Button} from 'components/Button';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {useRecord} from 'hooks/useRecord';
import {TagNames} from 'components/TagNames';

const Content = styled.div`
  background: #fff;
  margin-top: 8px;
  padding: 0 16px;
  font-size: 16px;
  color: #333333;
  > .tagName{
    > span{ line-height: 44px; font-weight: bolder}
  }
`;
const Category = styled.div`
  height: 44px;
  line-height: 18px;
  padding:13px 0;
  > label{
    &:nth-child(1){
      margin-right: 20px;
    }
    > input{
      margin-right: 5px;
    }
  }
`;
const DeleteTag = styled.div`
  padding: 8px 16px;
`;

type Params = {
  createAt: string;
}

export const RecordEditPage: React.FC = () => {
  const {getRecord, updateRecord, deleteRecord, findRecords} = useRecord();
  let {createAt: timeString} = useParams<Params>();
  const record = findRecords(timeString);
  const categoryList: ('-'|'+')[] = ['-','+']
  const hashMap = {'-': '支出', '+': '收入'};
  const Main = () => (
    <div>
      <Content>
        <TagNames record={record}/>
        <Input label="备注:"
               value={getRecord(timeString, 'note')}
               type="text"
               onChange={e => updateRecord(timeString, {note: e.target.value})}
        />
        <Category>
          {categoryList.map(item =>
            <label key={item}>
              <input type="radio" name="drone"
                     value={getRecord(timeString, 'category')}
                     defaultChecked={getRecord(timeString, 'category') === item}
                     onClick={() => updateRecord(timeString, {category: item})}
              />
              <span>{hashMap[item]}</span>
            </label>
          )}
        </Category>
        <Input label="数额:"
               value={getRecord(timeString, 'amount')}
               type="text"
               onChange={e => updateRecord(timeString, {amount: parseFloat(e.target.value) || 0})}
        />
      </Content>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => deleteRecord(timeString)}>删除记录</Button>
      </Center>
    </div>
  );

  return (
    <Layout>
      <div>
        <Topbar value="修改记录"/>
        {record ? Main() : <DeleteTag>记录删除成功</DeleteTag>}
      </div>
    </Layout>
  );
};
