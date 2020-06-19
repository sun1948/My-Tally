import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
const CategorySection: React.FC = () => {
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const [currentCategory, setCurrentCategory] = useState('-');
  const hashMap = {'-': '支出', '+': '收入'};
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={currentCategory === c ? 'selected' : ''}
              onClick={() => {setCurrentCategory(c);}}
          >{hashMap[c]}
          </li>
        )}
        {/*<li className={category ==='-'? 'selected' : ''}*/}
        {/*    onClick={()=>{setCategory('-')}}>支出</li>*/}
        {/*<li className={category ==='+'? 'selected' : ''}*/}
        {/*    onClick={()=>{setCategory('+')}}>收入</li>*/}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};