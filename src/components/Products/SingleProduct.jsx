import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '../Container';
import { Image } from '../Image';
import SubTitle from '../SubTitle';
import { device } from '../../utils/device';

const SingleProdContainer = styled(Container)`
  ${device.tablet} {
    div {
      color: black;
    }
  }
`;

const IndivProd = ({ title, image, descriptionList, show, ...props }) => {
  return (
    <SingleProdContainer flex show={show} {...props}>
      {descriptionList.map(data => (
        <SubTitle 
          size={3}
          title={data.descriptionTitle}
          white
          edgeColor="black"
          tEdgeColor="green"
          height="auto"
          width="60%"
          tWidth="90%"
          margin={[4,0]}
          tMargin={[1,1.4,4,'auto']}
          key={data.descriptionTitle}
          >
          {data.description}
        </SubTitle>
      ))}
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
        <Image src={image} />
      </Container>
    </SingleProdContainer>
  );
};

IndivProd.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.array,
  show: PropTypes.bool,
};

export default IndivProd;
