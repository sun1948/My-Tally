import React from 'react';
import Layout from 'components/Layout';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import {Button} from 'components/Button';
import {Center} from 'components/Center';
import {Space} from '../components/Space';

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
      margin-right: 16px;
      }
    }
  }
`;
const Tags = () => {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={"/Tag/"+tag.id}>
              <span className="oneLine">{tag.name}</span>
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