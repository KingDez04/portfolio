import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: 50vh;
  background-image: url(/images/profile.jpeg);
  background-size: cover;
  background-position: center;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0F1624;
    opacity: 0.2;
    z-index: 1;
  }
`;

const BackgroundImage = () => {
  return (
    <Container>
      <Background />
    </Container>
  );
};

export default BackgroundImage;