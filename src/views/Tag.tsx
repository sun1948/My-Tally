import React from 'react';
import {useTags} from 'hooks/useTags';
import {useParams,useHistory} from 'react-router-dom';
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
  align-items: center; 
  background: #fff;
  padding: 12px 16px;
  .icon{ width: 22px;height: 22px; }
`;

const InputWrapper = styled.div`
  background: #fff;
  padding: 0 16px;
  margin-top: 8px;
  font-size: 16px;
  color: #333333;
`;
const Tag: React.FC = () => {
  let {id: idString} = useParams<Params>();
  const {findTag, updateTag, deleteTag} = useTags();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag:{id:number;name:string}) => (
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
  const history = useHistory();
  const onClickBack = ()=>{
    history.goBack();
  }
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : <div>标签不存在</div>}
    </Layout>
  );
};
export {Tag};