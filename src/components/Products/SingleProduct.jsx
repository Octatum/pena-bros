import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../Container';
import { Image } from '../Image';
import SubTitle from '../SubTitle';

const Banner = styled(Container)`
  position: absolute;

  left: 0;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`;

const IndivProd = ({ title, image, description, show, ...props }) => (
  <Banner flex show={show} height="auto" {...props}>
    <SubTitle
      size={3}
      title={title}
      white
      edgeColor="black"
      width="60%"
      margin={[4, 0]}
    >
      {description}
    </SubTitle>
    <Container
      flex
      backColor="white"
      padding={[2, 8]}
      width="95%"
      margin={[0, 0, 3, 'auto']}
    >
      <Image src={image} />
    </Container>
  </Banner>
);

IndivProd.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  show: PropTypes.bool,
};

export default IndivProd;
