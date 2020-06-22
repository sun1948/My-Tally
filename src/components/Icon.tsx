import React from 'react';
import styled from 'styled-components';

// require('icons/tag.svg');
// require('icons/money.svg');
// require('icons/chart.svg');
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

const IconWrapper = styled.span`
  display: inline-block;
  height: 18px;
  > svg {
    width: 20px; height: 18px;
    fill:#333333;
  }
`
type Props = {
  name?: string;
}
const Icon = (props: Props) => {
  return (
    <IconWrapper>
      <svg className="icon">
        {/*注意.name，外部数据以对象形式传入*/}
        <use xlinkHref={"#" + props.name}/>
      </svg>
    </IconWrapper>
  );
};

export default Icon;