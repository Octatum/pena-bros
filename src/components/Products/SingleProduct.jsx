import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import { Container } from '../Container';
import SubTitle from '../SubTitle';
import { device } from '../../utils/device';

const SingleProdContainer = styled(Container)`
  ${device.tablet} {
    div {
      color: black;
    }
  }
`;

const IndivProd = ({ title, image, description, show, ...props }) => {
  return (
    <SingleProdContainer flex show={show} {...props}>
        <SubTitle
          size={3}
          title={title}
          white
          edgeColor="black"
          tEdgeColor="green"
          height="auto"
          width="60%"
          tWidth="90%"
          margin={[4, 0]}
          tMargin={[1, 1.4, 4, 'auto']}
        >
          {description}
        </SubTitle>
      <Container
        flex
        backColor="transparent"
        padding={[2, 8]}
        tPadding={[0]}
        width="95%"
        tWidth="100%"
        height="auto"
        margin={[0, 0, 3, 'auto']}
        tMargin={[0]}
      >
        <GatsbyImage style={{ width: "100%", maxWidth: '1000px' }} fluid={image.asset.fluid} />
      </Container>
    </SingleProdContainer>
  );
};

IndivProd.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string,
  show: PropTypes.bool,
};

export default IndivProd;
