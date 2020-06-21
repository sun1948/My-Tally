import React from 'react';
import Layout from 'components/Layout';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li{
    border-bottom: 1px solid #BCBBC1; 
    margin-left: 15px;
    > a{
      display: flex; justify-content: space-between; 
      align-items: center; 
      padding: 10px 0; //把padding放进a标签，使点击范围足够大
      .icon{
      width: 20px; height: 18px;
      margin-right: 16px; fill:#333333;
      }
    }
  }
`;
const Button = styled.button`
  font-size: 18px; padding: 8px 12px;
  color: #fff; background: #767676;
  border: none; border-radius: 4px;
`;
const Center = styled.div`
  display:flex; justify-content: center; align-items: center; flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`
const Tags = () => {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={"/Tag/"+tag}>
              <span className="oneLine">{tag.id}:{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>新建标签</Button>
        <Space/>
      </Center>
    </Layout>
  );
};
export default Tags;