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
        CS Major, Frontend Developer
      </SectionText>
      <Link href="/public/Ademola - Resume.pdf" passHref legacyBehavior>
        <a>
          <Button>Resume</Button>
        </a>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
