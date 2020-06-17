import React from 'react';

// require('icons/tag.svg');
// require('icons/money.svg');
// require('icons/chart.svg');
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props = {
  name: string;
}
const Icon = (props: Props) => {
  return (
    <svg className='icon'>
      {/*注意.name，外部数据以对象形式传入*/}
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};

export default Icon;