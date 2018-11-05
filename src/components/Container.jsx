import styled from 'styled-components';

function displayType(props) {
  const flex = { props } || false;
  if(flex) {
    return {
      "display": "flex",
      "flex-direction": 'column',
      "align-items": 'center',
      "justify-content": 'space-evenly',
    }
  }
}

export const Container = styled.div`
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background: ${props => props.green ? props.theme.color.green : "transparent"};
  ${displayType}
`;