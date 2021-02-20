import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: radnika_next;
    src: url(\static\radnikanext-medium-webfont.woff2);
    format: 'woff2';
    font-weight: normal;
  }
  :root {
    --black: #393939;
    --red: #ff0000;
  }
  
  body {
    font-family: 'radnika_next',-apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: var(--black);
    :hover {
      text-decoration: underline;
    }
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
const InnerStyles = styled.div`
  button {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }
`;
export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
