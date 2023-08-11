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
        Deadline-oriented software engineer and Computer Science student at Babcock University. Solid track record of architecting solutions that exceed client expectations.
      </SectionText>
      <Button onclick={() => window.location = 'https://google.com'}>About</Button>
    </LeftSection>
  </Section>
);

export default Hero;