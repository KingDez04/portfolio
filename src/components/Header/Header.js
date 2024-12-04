import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <container>
    <Div1>
      <Link legacyBehavior href="/">
        <a
         style={{sdisplay: "flex", alignItems: "center", color: 'yellow', marginBottom: '10px'}}>
          <DiCssdeck size="3rem" />
           <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#Projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/KingDez04">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ademola-ademeso">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://medium.com/@desmondademeso">
        <AiFillMediumCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/King_dez_04">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </container>
);

export default Header;
