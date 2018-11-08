import styled from 'styled-components';

function displayType(props) {
  const flex = { props } || false;
  const direction = props.row ? 'row' : 'column';
  const alignment = props.align ? props.align : 'center';
  const justify = props.justify ? props.justify : 'space-evenly';

  if (flex) {
    return {
      display: 'flex',
      'flex-direction': direction,
      'align-items': alignment,
      'justify-content': justify,
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

function background({backColor = 'transparent', theme}) {
  const color = backColor === 'green' ? theme.color.green : backColor;
  return {
    'background-color': color
  }
}

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};

  ${background}
  ${displayType}
  ${padding}
  ${margin}
`;
