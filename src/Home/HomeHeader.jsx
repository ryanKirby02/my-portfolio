import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Layout, Description } from '../Layout/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import '../Layout/styles.css'

const HomePage = () => {
  return (
    <Layout>
      <HomePageLayout>
        <Description>
          <h2>
            <span style={{ color: '#53f6c7' }}>&lt;h&gt;</span>
            Hello
            <span style={{ color: '#53f6c7' }}>&lt;/h&gt;</span>
            <br />
            <span style={{ color: '#53f6c7' }}>I'm Ryan</span>, A Front-End Web
            Developer
          </h2>
          <p>
            That is Pasionate for the craft, and ready to do whatever it takes
            to get the job!
          </p>
        </Description>
        <Cta>
          <p>If you want to contact me</p>
          <span style={{ color: '#53f6c7', fontWeight: 'bold' }}>
            Scroll Down
          </span>
          <FontAwesomeIcon className='down-arrow' icon={faArrowDown} size="3x" />
        </Cta>
      </HomePageLayout>
      <Image>
        <motion.img src='../' alt='profile' />
      </Image>
    </Layout>
  );
};

export default HomePage;

const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Cta = styled.div`
  display: flex;
  flex-direction: column;

`;

const HomePageLayout = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
