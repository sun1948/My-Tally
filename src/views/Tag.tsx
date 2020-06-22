import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';

type Params = {
  id: string;
}


const Tag: React.FC = () => {
  let {id} = useParams<Params>();
  const {findTag} = useTags();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <header>
        <Icon name="left"/>
        <span>编辑标签</span>
      </header>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder={tag.name}/>
        </label>
      </div>

      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>

  );
};
export {Tag};