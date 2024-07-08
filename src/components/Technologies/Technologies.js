import React from 'react';
import { DiFirebase, DiPython, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
     <SectionDivider/>
     <br/>
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>
      I've worked with a range of technologies in Frontend development and Data Science.
     </SectionText>
     <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br/>
            [HTML, CSS, Tailwind] <br/>
            JavaScript <br/>
            React.js <br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Python <br/>
            SQL <br/>
            Django <br/>
            Azure
          </ListParagraph>
        </ListContainer>
      </ListItem>
     </List>
  </Section>
);

export default Technologies;
