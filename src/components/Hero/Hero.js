import React from 'react';

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
      <Button onclick={() => window.location = 'https://google.com'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
