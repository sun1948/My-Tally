import React, { useState } from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

type Params = {
  id: string;
}
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center; background: #fff;
  padding: 12px 16px;
`

const InputWrapper = styled.div`
  background: #fff;
  padding: 0 16px;
  margin-top: 8px;
  font-size: 16px;
  color: #333333;
`
const Tag: React.FC = () => {
  let {id} = useParams<Params>();
  const {findTag} = useTags();
  const tag = findTag(parseInt(id));
  const [x,setX] = useState(tag.name);
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="请写标签"
               value={x}
               onChange={e =>{
                 setX(e.target.value)
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </Center>
    </Layout>

  );
};
export {Tag};