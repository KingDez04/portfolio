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
        A third-year Computer Science student at Babcock University and a Software Engineering student at ALX with a passion for Frontend development. I have experience working with React and SQL.
      </SectionText>
      <Button onclick={() => window.location = 'https://google.com'}>My Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
