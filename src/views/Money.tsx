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
  
`;
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
`;
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
`;
const NumberPadSection = styled.section`
  output{
    display: block;
    font-size: 36px;
    line-height: 72px;
    text-align: end;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25);
  }
  .pad{
    > button{
      float: left;
      width: 25%; font-size: 18px; line-height: 22px; height: 64px;
      border: none;
      &.ok{ height: 128px; background: #8B8B8B; float:right;  }
      &:nth-child(1){
        background: #F2F2F2;
      }
      &:nth-child(2), :nth-child(5){
        background: #E0E0E0;
      }
      &:nth-child(3), :nth-child(6), :nth-child(9){
        background: #D3D3D3;
      }
      &:nth-child(4), :nth-child(7), :nth-child(10){
        background: #C1C1C1;
      }
      &:nth-child(8), :nth-child(11){
        background: #A9A9A9;
      }
      &.dot{background: #9A9A9A;}
      &.zero{ width: 50%; background: #A9A9A9;}
    }
  }
`;

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
        <output>100</output>
        <div className="pad clearfix">
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
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
};
export default Money;