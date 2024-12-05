import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ademeso,<br />
        Ademola.
      </SectionTitle>
      <SectionText>
        Software Engineer | CS Major
      </SectionText>
      <Link href="/Ademola%20-%20Resume.pdf" passHref>
        <Button as="a" target="_blank" rel="noopener noreferrer">
          Resume
        </Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;