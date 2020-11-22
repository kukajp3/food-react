import styled from 'styled-components';

import avocado from '../../assets/avocado.jpg';
import banana from '../../assets/banana.jpg';
import orange from '../../assets/orange.jpg';

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${avocado}) no-repeat;
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(2) {
    background: url(${orange}) no-repeat;
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(3) {
    background: url(${banana}) no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Spacer = styled.div`
  height: 6vh;
`;
