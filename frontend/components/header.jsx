import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const StyledHeader = styled.header`
  background-color: #393939;
  box-shadow: 0 3px 3px rgba(0,0,0,.2);
  display: grid;
  grid-template-columns: 215px 1fr 200px;
  grid-column-gap: 20px;
`;

const LogoLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  height: 50px;
  line-height: 30px;
  padding: 0px 15px;
  svg {
    margin-top: 7px;
    display: inline-block;
    float: left;
  }
  span {
    display: inline-block;
    padding-left: 5px;
    padding-top: 10px;
    font-size: 1.2rem;
    font-weight: 300;
  }
  b {
    font-weight: bold;
    display: inline-block;
    margin-left: 2px;
  }
`;

const SearchBar = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #777;
  background: rgba(0,0,0,.1);
  padding: 8px 10px;
  margin-top: 9px;
`;

const ProfileLink = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 50px;
`;


function Header() {
  return (
    <StyledHeader>
      <LogoLink href="" className="logo">
        <FontAwesomeIcon icon={faStackOverflow} size='2x' />
        <span>stuck<b>overclone</b></span>
      </LogoLink>
      <form action="" className='search'>
        <SearchBar type="text" placeholder='Search...' />
      </form>
      <ProfileLink href="" className="profile">SirHackALot</ProfileLink>
    </StyledHeader>
  )
}

export default Header;
