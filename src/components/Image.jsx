import styled from 'styled-components';

export const Image = styled.img`
  width: ${props => (props.width ? props.width : 'auto')};
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: flex;
  box-sizing: border-box;
`;
