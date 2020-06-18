import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';

const TagsSection = styled.section`
  background-color: #ffffff;
  padding: 12px 16px;
  ol{
    font-size: 14px;
    margin: 0 -12px;
    >li{
      background-color: #d9d9d9; display: inline-block; 
      border-radius: 18px; padding: 1px 18px;
      line-height: 22px;margin: 4px 12px;
    }
  }
  button{
    font-size: 14px;border: none;
    background: none;border-bottom: 1px solid #333;
    color: #666; padding: 2px 4px; margin-top: 14px;
  } 
  
`
const NotesSection = styled.section`
  label{ 
    background-color: #f5f5f5;
    padding: 0 16px;
    display: flex;
    align-items: center;
    > span{
      font-size: 14px; line-height: 22px; color: #333333;
      white-space: nowrap;
      margin-right: 16px;
    }
    > input{
      height: 73px;
      width: 100%;
      border: none;
      background: none;
    }
  }
`
const CategorySection = styled.section`
  background: #C4C4C4;
  font-size: 24px;
  line-height: 22px;
  >ul{
    >li{
      width: 50%; text-align: center;
      display:inline-block; padding: 21px 0; position: relative;
      &.selected::after{
        content: ''; height: 4px; background: #333333; width: 100%;
        position: absolute; left: 0; bottom: 0;
      }
    }
  }
`
const NumberPadSection = styled.section`

`

const Money = () => {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在此添加备注"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
};
export default Money;