import React from 'react';
import { DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
     <SectionDivider/>
     <br/>
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>
      I've worked with a range of technologies in the web development world
     </SectionText>
     <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            CSS <br/>
            React.js <br/>
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br/>
            HTML<br/>
            Python<br/>
            JavaScript<br/>
            C++<br/>
            C
          </ListParagraph>
        </ListContainer>
      </ListItem>
     </List>
  </Section>
);

export default Technologies;
