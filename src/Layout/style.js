import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Layout = styled(motion.div)`
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  padding: 3rem 8rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  font-weight: lighter;
  z-index: 2;
  padding-top: 3rem;
  p {
    font-size: 1.2rem;
    padding-top: 1rem;
  }
`;
