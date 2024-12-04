import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center >
        HELLO, WORLD.<br />
        I'm Ademeso, Ademola.
      </SectionTitle>
      <SectionText>
        Software Engineer | CS Major
      </SectionText>
      <Link href="/Ademola%20-%20Resume.pdf" passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Button>Resume</Button>
        </a>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
