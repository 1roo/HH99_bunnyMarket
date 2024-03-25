import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import { GoBell } from 'react-icons/go';
import { SlArrowDown } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const Header = () => {
  const dong = new Cookies().get('userAddress');
  return (
    <HeaderContainer>
      <>
        <Title>
          {dong}
          {/* <SlArrowDown size='15' /> */}
        </Title>
      </>
      <Icons>
        <IoSearchOutline size='25' />
        <BackLink to='/noti'>
          <GoBell size='25' />
        </BackLink>
      </Icons>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 430px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0px 20px;
`;

const Icons = styled.div`
  width: 75px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 30px 25px;
`;

const BackLink = styled(Link)`
  color: #000;
`;
