import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  background: #ff3333;
  transform: skew(-4deg);
  position: relative;
  z-index: 2;
  margin-left: 2em;
  a {
    text-transform: uppercase;
    color: white;
    font-size: 2em;
    text-decoration: none;
    padding: 0.5em 1em;
  }
`;

const HeaderStyles = styled.div`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-around;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: auto 1fr;
    border-bottom: 1px solid var(--black, black);
    padding: 1em 0;
  }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">Search</div>
      <Nav />
    </HeaderStyles>
  );
}
