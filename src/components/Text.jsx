import styled from 'styled-components';
import { device } from '../utils/device';

const defaultSize = 1;
const increments = {
  default: 0.4,
  laptop: 0.35,
  tablet: 0.3,
  mobile: 0.2,
};

function setFontSize({ size = 0 }, increment) {
  return `${defaultSize + increment * size}em`;
}

function setColor({ theme, green, gray, white }) {
  if (green) {
    return theme.color.green;
  }
  if (gray) {
    return 'gray';
  }
  return white ? 'white' : 'black';
}

function setPadding(padding) {
  const measure =
    padding &&
    padding.map(value => (value !== 'auto' ? value + 'em' : 'auto')).join(' ');

  if (padding) {
    return { padding: measure };
  }
}

function setMargin(margin) {
  const measure =
    margin &&
    margin.map(value => (value !== 'auto' ? value + 'em' : 'auto')).join(' ');

  if (margin) {
    return { margin: measure };
  }
}

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.main}, sans-serif;
  font-weight: ${({ bold }) => (bold ? bold : 'normal')};
  text-align: ${({ align }) => (align ? align : 'left')};
  color: ${setColor};
  text-decoration: none;
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};

  font-size: ${props => setFontSize(props, increments.default)};

  ${({ padding }) => setPadding(padding)};
  ${({ margin }) => setMargin(margin)};

  ${device.laptop} {
    font-size: ${props => setFontSize(props, increments.laptop)};
  }
  ${device.tablet} {
    ${({ tMargin }) => setMargin(tMargin)};
    ${({ tPadding }) => setPadding(tPadding)};
    font-size: ${props => setFontSize(props, increments.tablet)};
  }
  ${device.mobile} {
    ${({ mMargin }) => setMargin(mMargin)};
    ${({ mPadding }) => setPadding(mPadding)};
    font-size: ${props => setFontSize(props, increments.mobile)};
  }

  line-height: 1.3em;
  
`;
