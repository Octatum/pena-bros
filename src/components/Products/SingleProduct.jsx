import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../Container';
import { Image } from '../Image';
import SubTitle from '../SubTitle';
import { numberValues } from '../../utils/device';

const IndivProd = ({ title, image, description, show, ...props }) => {
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= numberValues.tablet;
  }

  return (
    <Container flex show={show} {...props}>
      <SubTitle
        size={3}
        title={title}
        white={!isMobile}
        edgeColor={isMobile ? 'green' : 'black'}
        height="auto"
        width="60%"
        tWidth="80%"
        margin={[4, 0]}
        tMargin={[4, 'auto']}
      >
        {description}
      </SubTitle>
      <Container
        flex
        backColor="white"
        padding={[2, 8]}
        tPadding={[0]}
        width="95%"
        tWidth="100%"
        height="auto"
        margin={[0, 0, 3, 'auto']}
        tMargin={[0]}
      >
        <Image src={image} />
      </Container>
    </Container>
  );
};

IndivProd.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  show: PropTypes.bool,
};

export default IndivProd;
