import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropDown = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropDownButton = styled.button`
  color: #3e3e3e;
  padding: 0px 15px 0px 0px;
  outline: none !important;
`;

export const DropDownContent = styled.div`
  position: relative;
  width: 240px;
  height: auto;
  padding: 10px 0px 10px 0px;
  font-size: 18px;
  border-radius: 10px;
  background: #3e3e3e;
  z-index: 999999;
`;

export const DropDownLink = styled(Link)`
  display: inline-flex;
  text-align: end;
  width: 240px;
  text-decoration: none;
  padding: 10px;

  -webkit-touch-callout: none;
  user-select: none;
  user-drag: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-size: 0.8em;

  &:link {
    color: white;
  }

  &:visited {
    color: white;
  }

  &:hover {
    color: #3e3e3e;
    background-color: white;
    text-decoration: none;
  }

  &:active {
    color: #3e3e3e;
    text-decoration: none;
  }
`;
