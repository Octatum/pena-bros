import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../Container';
import { Image } from '../Image';
import SubTitle from '../SubTitle';

const IndivProd = ({ title, image, description, show, ...props }) => (
  <Container flex show={show} {...props}>
    <SubTitle
      size={3}
      title={title}
      white
      edgeColor="black"
      height="auto"
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
      height="auto"
      margin={[0, 0, 3, 'auto']}
    >
      <Image src={image} />
    </Container>
  </Container>
);

IndivProd.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  show: PropTypes.bool,
};

export default IndivProd;
