import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center >
        <p>style={{color: 'yellow'}}>HELLO, WORLD.</p><br />
        I'm Ademeso, Ademola.
      </SectionTitle>
      <SectionText>
        Deadline-oriented software engineer and Computer Science student at Babcock University. Solid track record of architecting solutions that exceed client expectations.
      </SectionText>
      <Button onclick={() => window.location = 'https://google.com'}>My CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;
