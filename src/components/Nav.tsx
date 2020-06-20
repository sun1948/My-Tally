import styled from 'styled-components';
import React from 'react';
import {NavLink} from 'react-router-dom';
import Icon from './Icon';

const NavWrapper = styled.nav`
  background-color: white;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
  > ul{
    display: flex;
    > li{
      width: 33.3333%;text-align: center;
      > a{
        padding: 4px 0; display: flex;
        flex-direction: column; align-items: center;
        .icon{ width: 24px;height: 24px; }
        &.selected{ color: red;
          .icon{fill: red;}
        }
      }
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tag" activeClassName="selected">
            <Icon name="tag"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
