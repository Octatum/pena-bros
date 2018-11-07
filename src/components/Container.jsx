import styled from 'styled-components';

function displayType(props) {
  const flex = { props } || false;
  const direction = props.row ? 'row' : 'column';

  if (flex) {
    return {
      display: 'flex',
      'flex-direction': direction,
      'align-items': 'center',
      'justify-content': 'space-around',
    };
  }
}

function padding({ padding }) {
  const measure =
    padding &&
    padding.map(value => (value !== 'auto' ? value + 'em' : 'auto')).join(' ');

  if (padding) {
    return { padding: measure };
  }
}

function margin({ margin }) {
  const measure =
    margin &&
    margin.map(value => (value !== 'auto' ? value + 'em' : 'auto')).join(' ');

  if (margin) {
    return { margin: measure };
  }
}

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: ${props => (props.padding ? props.padding : 0)}em;
  background: ${props =>
    props.green ? props.theme.color.green : 'transparent'};
  width: 100%;

  ${displayType}
  ${padding}
  ${margin}
`;
