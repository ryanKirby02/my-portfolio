import { Layout } from '../Layout/style';
import styled from 'styled-components';

//Photos
import Photo1 from '../img/01.jpg';
import Photo2 from '../img/02.jpg';
import Photo3 from '../img/03.jpg';

const ProjectsShowcase = () => {
  return (
    <Layout>
      <ProjectsHeader>
        <h1>&lt;Projects&gt;</h1>
      </ProjectsHeader>
      <Projects>
        <Project1>
          <img src={Photo1} alt='Project 1' />
        </Project1>
        <Project2>
          <img src={Photo2} alt='Project 2' />
        </Project2>
        <Project3>
          <img src={Photo3} alt='Project 3' />
        </Project3>
      </Projects>
    </Layout>
  );
};

const ProjectsHeader = styled.div`
  text-align: right;
  h1 {
    font-size: 7rem;
    position: absolute;
    top: 100%;
    right: 10%;
    color: #303030;
    z-index: -1;
  }
`;

const Projects = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Project1 = styled.div`
  grid-column: 1/3;
  grid-row: 1/3;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    transition: 0.4s;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.05);
  }
`;
const Project2 = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    transition: 0.4s;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.05);
  }
`;
const Project3 = styled.div`
  grid-column: 3/4;
  grid-row: 2;
  overflow: hidden;

  img {
    cursor: pointer;
    width: 100%;
    height: auto;
    transition: 0.4s;
  }
  img:hover {
    transform: scale(1.05);
  }
`;

export default ProjectsShowcase;
