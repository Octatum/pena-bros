import React from 'react';
import styled from 'styled-components';

import SubTitle from '../../SubTitle';
import { Container } from '../../Container';
import ActionButton from '../../ActionButton';
import { device, numberValues } from '../../../utils/device';

const Action = styled(ActionButton)`
  align-self: flex-end;

  ${device.tablet} {
    position: absolute;
    top: calc(100% + 0.75em);
  }
`;

const ComparisonContainer = styled(Container)`
  ${device.tablet} {
    flex-direction: column;
  }
`;

const Comparison = ({ data, ...props }) => {
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= numberValues.tablet;
  }

  return (
    <ComparisonContainer flex row {...props}>
      <Container flex backColor="green" padding={[3]} tMargin={[0, 0, 5, 0]}>
        <SubTitle title="What is Lorem Ipsum?" edgeColor="black" white size={3}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </SubTitle>
        {/* IMAGES */}
        <Action
          width="auto"
          noAnimate
          textColor={!isMobile ? 'white' : 'black'}
          linkTo="our-works"
          name="go to our works"
        />
      </Container>
      <Container flex backColor="black" padding={[3]}>
        <SubTitle title="What is Lorem Ipsum?" edgeColor="green" white size={3}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </SubTitle>
        {/* IMAGES */}
        <Action
          width="auto"
          noAnimate
          textColor={!isMobile ? 'white' : 'black'}
          linkTo="our-works"
          name="go to our works"
        />
      </Container>
    </ComparisonContainer>
  );
};

export default Comparison;
