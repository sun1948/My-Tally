import Layout from 'components/Layout';
import React from 'react';
import {Topbar} from 'components/Topbar';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';
import {Button} from '../components/Button';
import {useTags} from '../hooks/useTags';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {useRecord} from '../hooks/useRecord';

const InputWrapper = styled.div`
  background: #fff;
  margin-top: 8px;
  padding: 0 16px;
  font-size: 16px;
  color: #333333;
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

type Params = {
  tagIds: string;
}
export const RecordItem: React.FC = () => {
  const {getRecords, updateNote, updateAmount, updateCategory, deleteRecord} = useRecord();
  const {getName} = useTags();
  let {tagIds: idString} = useParams<Params>();
  const numberArray = idString.split(',').map(id => parseInt(id));
  const Main = (numberArray: number[]) => (
    <div>
      <InputWrapper>
        <Input label="标签:"
               value={numberArray.map(id => getName(id)).join()}
               type="text"
        />
        <Input label="备注:"
               value={getRecords(numberArray, 'note')}
               type="text"
               onChange={e => updateNote(numberArray, {note: e.target.value})}
        />
        <Category>
          <label className="expense">
            <input type="radio" name="drone"
                   value={getRecords(numberArray, 'category')}
                   checked={getRecords(numberArray, 'category') === '-'}
                   onClick={() => updateCategory(numberArray, {category: '-'})}
            />
            <span>支出</span>
          </label>
          <label className="income">
            <input type="radio" name="drone"
                   value={getRecords(numberArray, 'category')}
                   checked={getRecords(numberArray, 'category') === '+'}
                   onClick={() => updateCategory(numberArray, {category: '+'})}
            />
            <span>收入</span>
          </label>
        </Category>
        <Input label="数额:"
               value={getRecords(numberArray, 'amount')}
               type="text"
               onChange={e => updateAmount(numberArray, {amount: parseFloat(e.target.value) || 0})}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => deleteRecord(numberArray)}>删除记录</Button>
      </Center>
    </div>
  );

  return (
    <Layout>
      <div>
        <Topbar value="修改记录"/>
        {numberArray ? Main(numberArray) : <div>记录不存在</div>}
      </div>
    </Layout>
  );
};
