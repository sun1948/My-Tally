import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
  > ul{
    display: flex;
    > li{
      width: 333333%;
      text-align: center;
      padding: 16px;
    }
  }
`
function Nav (){
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tag">标签</Link>
        </li>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;
