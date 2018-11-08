import styled from 'styled-components';

export const Image = styled.img`
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  max-width: ${props => (props.width ? props.width : 'auto')};
  max-height: 100%;
  object-fit: contain;
  box-sizing: border-box;
`;