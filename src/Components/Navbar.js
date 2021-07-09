import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import '../Layout/styles.css';

const Navbar = () => {
  return (
    <StyledNav>
      <h1>
        <Logo id='logo' to='/'>
          <FontAwesomeIcon className='logo' icon={faRegistered} size='4x' />
          Ryan <br /> Kirby
        </Logo>
      </h1>
      <ul>
        <li>
          <NavComponent as={Link} to={'/'}>
            <h4>Home</h4>
          </NavComponent>
        </li>
        <li>
          <NavComponent as={Link} to={'/work'}>
            <h4>Projects</h4>
          </NavComponent>
        </li>
        <li>
          <NavComponent as={Link} to={'/contact'}>
            <h4 as={Link} to={'/contact'}>
              Contact Me
            </h4>
          </NavComponent>
        </li>
      </ul>
    </StyledNav>
  );
};

//styled components
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  li {
    position: relative;
    padding: 0rem 1rem;
  }
  h1 {
    color: white;
  }
`;

const NavComponent = styled.div`
  color: white;
  h4 {
    transition: 0.4s;
    padding: 0.8rem;
    cursor: pointer;
  }
  h4:hover {
    background-color: #53f6c7;
    color: black;
  }
`;

const Logo = styled.div`
  display: flex;
`;

export default Navbar;
