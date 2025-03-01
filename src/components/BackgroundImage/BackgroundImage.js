import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
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
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius: 20px;

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
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    height: 20vh;
    top: 20px;
  }

  @media (max-width: 480px) {
    height: 19vh;
    top: 30px;
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