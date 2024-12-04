import React from 'react';
import { DiFirebase, DiGit, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
     <SectionDivider/>
     <br/>
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>
      I've worked with a range of technologies: from Frontend to Backend
     </SectionText>
     <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend Tools</ListTitle>
          <ListParagraph>
            [HTML, CSS, Tailwind] <br/>
            JavaScript <br/>
            Typescript <br/>
            React.js <br />
            State Management (Redux/Context) <br />
            RESTful API Integration
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend Systems & Languages</ListTitle>
          <ListParagraph>
            [SQL, MySQL, PostgreSQL] <br/>
            Python <br/>
            Node.js <br/>
            Java <br/>
            Django <br/>
            Microsoft Azure
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Developer Tools</ListTitle>
          <ListParagraph>
            Git <br />
            GitHub <br />
            Postman <br/>
            VS Code <br/>
            Visual Studio <br/>
            IntelliJ <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
     </List>
  </Section>
);

export default Technologies;
