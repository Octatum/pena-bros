import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { Container } from './Container';
import { Text } from './Text';
import Arrows from './Arrows';
import { device } from '../utils/device';

const ActionLink = styled(Text)`
  position: relative;
  -webkit-background-clip: text;
  background-image: ${({ theme }) => `linear-gradient(to right, ${theme.color.green}, ${theme.color.green} 50%, black 50%)`};
  background-size: 200% 100%;
  background-position: 100%;

  transition: all 0.3s cubic-bezier(0.5, 0.1, 0.35, 1);
  ${({ animate }) => animate ? {
    '-webkit-text-fill-color': 'initial' 
  } : {
    '-webkit-text-fill-color': 'transparent' 
  }};

  :hover {
    background-position: ${({ animate }) => animate ? '100%' : '0%'};
  }

  ${device.tablet} {
    order: ${({ reverseOnMobile }) => (reverseOnMobile ? 1 : 0)};
  }
`;

const ArrowContainer = styled(Container)`
  & > div:last-child {
    display: initial;
  }
  & > div:first-child {
    display: none;
  }

  ${device.tablet} {
    & > div:first-child {
      display: ${({ reverseOnMobile }) =>
        reverseOnMobile ? 'initial' : 'none'};
    }
    & > div:last-child {
      display: ${({ reverseOnMobile }) =>
        reverseOnMobile ? 'none' : 'initial'};
    }
  }
`;

const ArrowResized = styled(Arrows)`
  transform: scale(0.75);
`;

const ActionButton = ({
  linkTo,
  name,
  textColor,
  noAnimate,
  onMobileReverse,
  arrowColors,
  ...props
}) => {
  console.log(textColor);
  return (
    <Container
      flex
      row
      justify="flex-start"
      align="center"
      height="auto"
      {...props}
    >
      <ActionLink
        reverseOnMobile={onMobileReverse}
        to={linkTo}
        as={Link}
        animate={noAnimate ? 1 : 0}
        white={textColor === 'white' ? 1 : 0}
        bold="bolder"
        size={2.5}
      >
        {name}
      </ActionLink>
      <ArrowContainer
        reverseOnMobile={onMobileReverse}
        flex
        row
        justify="flex-start"
        margin={[0, 0.5]}
        tMargin={[0]}
        width="auto"
      >
        <ArrowResized arrowColors={arrowColors} margin={['auto', 0]} left />
        <ArrowResized arrowColors={arrowColors} margin={['auto', 0]} />
      </ArrowContainer>
    </Container>
  );
};

ActionButton.propTypes = {
  linkTo: PropTypes.string,
  name: PropTypes.string,
  textColor: PropTypes.string,
  noAnimate: PropTypes.bool,
  onMobileReverse: PropTypes.bool,
  arrowColors: PropTypes.array,
};

ActionButton.defaultProps = {
  textColor: 'black',
  noAnimate: false,
  onMobileReverse: true,
  arrowColors: ['black', 'black'],
};

export default ActionButton;
