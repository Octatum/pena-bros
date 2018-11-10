import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../../Container';
import SubTitle from '../../SubTitle';
import { Image } from '../../Image';

const View = styled(Container)`
  display: ${({ display }) => (display ? 'flex' : 'none')};
`;

const ImageCenter = styled(Image)`
  align-self: center;
  width: 100%;
  max-height: 450px;
  object-fit: fill;
`;

const ServiceView = ({ serviceData, show, ...props }) => (
  <View
    {...props}
    display={show}
    flex
    align="flex-start"
    justify="space-between"
  >
    <SubTitle size={2.5} title={serviceData.title} width="70%" margin={[4, 7]}>
      {serviceData.description}
    </SubTitle>
    <ImageCenter src={serviceData.image} />
  </View>
);

ServiceView.propTypes = {
  serviceData: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
};
ServiceView.defaultProps = {
  show: false,
};

export default ServiceView;
