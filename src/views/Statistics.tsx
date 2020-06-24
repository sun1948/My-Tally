import Layout from 'components/Layout';
import {CategorySection} from './Money/Category';
import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
`;
const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  return (
    <Layout>
      <Wrapper>
        <CategorySection value={category}
                         onChange={category => setCategory(category)}/>
      </Wrapper>

    </Layout>
  );
};
export default Statistics;