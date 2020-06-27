import React from 'react';
import {useTags} from 'hooks/useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from 'components/Space';
import {Topbar} from 'components/Topbar';

type Params = {
  id: string;
}

const InputWrapper = styled.div`
  background: #fff;
  padding: 0 16px;
  margin-top: 8px;
  font-size: 16px;
  color: #333333;
`;
const Statement = styled.div`
  padding: 8px 16px;
`
const Tag: React.FC = () => {
  let {id: idString} = useParams<Params>();
  const {findTag, updateTag, deleteTag} = useTags();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="请输入标签名称"
               value={tag.name}
               onChange={e => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
      </Center>
    </div>
  );
  //使用hash模式的Router，前进和后退都不会刷新页面
  return (
    <Layout>
      <Topbar value={'编辑标签'}/>
      {tag ? tagContent(tag) : <Statement>标签不存在</Statement>}
    </Layout>
  );
};
export {Tag};