import React from 'react';
import { AiFillGithub, AiFillMediumCircle, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0814-916-7007" >0814-916-7007</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:desmondademeso@gmail.com" >desmondademeso@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/KingDez04">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ademola-ademeso">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://medium.com/@desmondademeso">
          <AiFillMediumCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/kingdez_04">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
