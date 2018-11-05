import styled from 'styled-components';


const sizes = {
  small: 0.6,
  default: 0.8,
  medium: 1.0,
  large: 1.2
}

function setFontSize(size, screen) {
  return size * sizes[screen]
}

function setColor(props) {
  if (props.green) {
    return props.theme.color.green;
  }
  return props.white ? "white" : "black";
}

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.main}, sans-serif;
  font-weight: ${({ bold }) => bold ? 'bolder' : 'initial'};
  font-size: ${props => setFontSize(props.size, 'default')}em;
  color: ${setColor};
  
  text-decoration: none;
`;