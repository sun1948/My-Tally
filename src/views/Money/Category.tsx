import styled from "styled-components";

const CategorySection = styled.section`
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
export {CategorySection};