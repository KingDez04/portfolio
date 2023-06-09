import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center >
        Welcome to <br />
        Ademola's Portfolio
      </SectionTitle>
      <SectionText>
        Deadline-oriented software engineer with lots of experience. Solid track record of architecting solutions that exceed client expectations.
      </SectionText>
      <Button onclick={() => window.location = 'https://google.com'}>About</Button>
    </LeftSection>
  </Section>
);

export default Hero;