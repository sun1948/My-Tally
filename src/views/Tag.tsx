import React from 'react';
import Layout from 'components/Layout';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li{
    border-bottom: 1px solid #BCBBC1; padding: 10px 0;
    display: flex; justify-content: space-between;
    align-items: center; margin-left: 15px;
    .icon{
      width: 24px; height: 20px;
      margin-right: 16px; fill:#333333;
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
const Tag = () => {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(t =>
          <li key={t}>
            <span className="oneLine">{t}</span>
            <Icon name="right"/>
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
export default Tag;