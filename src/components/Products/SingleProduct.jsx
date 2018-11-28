import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../Container';
import { Image } from '../Image';
import SubTitle from '../SubTitle';

const Banner = styled(Container)`
  position: absolute;
  
  left: 0;
  /* display: ${({ show }) => (show ? 'flex' : 'none')}; */
  display: none;
`;

const ProdCont = styled(Container)`
  position: initial;

  &:hover {
    ${Banner} {
      display: flex;
    }
    background-color: black;
  }
`;

const IndivProd = ({
  title,
  preview,
  image,
  description,
  index,
  show,
  ...props
}) => (
  <ProdCont key={`${title}-${index}`} backColor="green" flex {...props}>
    <Image src={preview} width="70%" margin="auto" />
    <Banner flex show={show} backColor="green" height="auto">
      <SubTitle size={3} title={title} white edgeColor="black">
        {description}
      </SubTitle>
      <Image src={image} />
    </Banner>
  </ProdCont>
);

IndivProd.propTypes = {
  title: PropTypes.string,
  preview: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.number,
  show: PropTypes.bool,
};

export default IndivProd;
