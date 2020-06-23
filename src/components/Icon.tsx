import React from 'react';
import styled from 'styled-components';
import cs from 'classnames';

// require('icons/tag.svg');
// require('icons/money.svg');
// require('icons/chart.svg');
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

const IconWrapper = styled.span`
  display: flex;
  > svg {
    display:inline-block;
    width: 1em; height: 1em;
    fill:#333333;
    align-items: center;
  }
`
type Props = {
  name?: string;
} & React.SVGAttributes<HTMLOrSVGElement>;
const Icon = (props: Props) => {
  const {name,children,className,...rest} = props;
  return (
    <IconWrapper>
      <svg className={cs("icon",className)} {...rest}>
        {/*注意.name，外部数据以对象形式传入*/}
        <use xlinkHref={"#" + props.name}/>
      </svg>
    </IconWrapper>
  );
};

export default Icon;