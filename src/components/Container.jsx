import styled from 'styled-components';
import { device } from '../utils/device';

function displayType(props) {
  const flex = props.flex || false;
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

function background({ backColor = 'transparent', theme }) {
  const color = backColor === 'green' ? theme.color.green : backColor;
  return {
    'background-color': color,
  };
}

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : 'auto')};

  ${background};
  ${displayType};
  ${({ padding }) => setPadding(padding)};
  ${({ margin }) => setMargin(margin)};

  ${device.tablet} {
    ${({ tMargin }) => setMargin(tMargin)};
    ${({ tPadding }) => setPadding(tPadding)};
    ${({ tWidth }) => (tWidth ? { width: tWidth } : '')};
    ${({ tHeight }) => (tHeight ? { height: tHeight } : '')};
  }

  ${device.mobile} {
    ${({ mMargin }) => setMargin(mMargin)};
    ${({ mPadding }) => setPadding(mPadding)};
    ${({ mWidth }) => (mWidth ? { width: mWidth } : '')};
    ${({ mHeight }) => (mHeight ? { height: mHeight } : '')};
  }
`;
