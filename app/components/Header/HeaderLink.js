import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  diaplay: inline-flex;
  padding: 0em 0em 0em 0em;
  margin: 0em 2em 0em 0em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 14px;
  color: black;

  &:hover {
    color: gray;
  }
`;
