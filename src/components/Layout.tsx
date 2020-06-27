import Nav from './Nav';
import styled from 'styled-components';
import React, {useRef, useEffect} from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height:100vh;
`;
const Content = styled.div`
  flex-grow:1;
  overflow: auto;  //如果内容过高，使滚动区域出现在自身上，不影响下面
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; 
`;

type Props = {
  className?: string;
  scrollTop?: number;
}
const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {return;}
      mainRef.current.scrollTop = props.scrollTop!;  //！我不可能为空
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Content ref={mainRef} className={props.className}>
        {props.children}
      </Content>
      <Nav/>
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0
};

export default Layout;