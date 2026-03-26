import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const Container = styled(ReactMarkdown)`
  * {
    text-align: justify;
  }
  h1 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    font-size: 33.18px;
    line-height: 50px;
    padding: 1.5em 0;
  }
  h2 {
    font-family: 'Merriweather';
    font-style: normal;
    font-size: 20px;
    font-weight: 700;
    line-height: 2em;
    margin-bottom: 25px;
  }
  h3 {
    font-family: 'Merriweather';
    font-style: normal;
    font-size: 18px;
    font-weight: 500;
    line-height: 2em;
    margin-bottom: 5px;
  }
  h4 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 500;
    font-size: 1.1em;
    line-height: 2em;
  }
  h5 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    font-size: 33.18px;
    line-height: 50px;
  }
  h6 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    font-size: 33.18px;
    line-height: 50px;
  }
  p {
    font-family: 'Merriweather Sans';
    font-weight: 300;
    font-size: 16px;
    line-height: 36px;
    margin-bottom: 40px;
  }
  ol {
    list-style: decimal !important;
    padding-left: 2%;
  }
  ul {
    list-style-type: disc !important;
    padding-left: 2%;
    margin-bottom: 40px;
  }
  li {
    margin: 10px;
  }
  a {
    text-decoration: underline;
  }
  &a:hover {
    text-decoration: none;
  }
`;
