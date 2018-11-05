import styled from 'styled-components';
import { device } from '../utils/device'

const defaultSize = 1;
const increments = {
  default: 0.4,
  laptop: 0.35,
  tablet: 0.3,
  mobile: 0.2,
}

function setFontSize({ size }, increment) {
  size = size || 1;

  return `${defaultSize + increment * (size - 1)}em`;
}

function setColor({ theme, green, white }) {
  if (green) {
    return theme.color.green;
  }
  return white ? "white" : "black";
}

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.main}, sans-serif;
  font-weight: ${({ bold }) => bold ? '700' : 'initial'};
  text-align: ${({ align }) => align ? align : 'left'};
  line-height: 1.2em;
  color: ${setColor};
  text-decoration: none;

  font-size: ${props => setFontSize(props, increments.default)};

  ${device.laptop} {
    font-size: ${props => setFontSize(props, increments.laptop)};
  }
  ${device.tablet} {
    font-size: ${props => setFontSize(props, increments.tablet)};
  }
  ${device.mobile} {
    font-size: ${props => setFontSize(props, increments.mobile)};
  }
`;