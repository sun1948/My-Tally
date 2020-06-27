import Layout from 'components/Layout';
import React from 'react';
import {Topbar} from 'components/Topbar';
import { useHistory } from 'react-router-dom';

export const RecordItem:React.FC = ()=>{
  const history = useHistory();
  const onClickBack = ()=>{
    history.goBack();
  }
  return (
    <Layout>
      <div>
        <Topbar value={'修改记录'} onClick={onClickBack}/>
      </div>
    </Layout>
  )
}
