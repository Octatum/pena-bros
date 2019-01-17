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
  display: flex;

  span {
    position: absolute;

    left: 0;
    overflow: hidden;
    height: 100%;
    width: 0;
    font-size: 1em;
    color: ${({ theme }) => theme.color.green};
    transition: all 0.5s ease-in;
    display: inline-block;
  }

  :hover {
    span {
      width: ${({ animate }) => (animate ? 0 : 100)}%;
    }
  }

  ${device.tablet} {
    order: ${({ reverseOnMobile }) => (reverseOnMobile ? 1 : 0)};

    span {
      display: none;
    }
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

const ActionButton = ({
  linkTo,
  name,
  textColor,
  noAnimate,
  onMobileReverse,
  arrowColors,
  ...props
}) => {
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
        <span>{name}</span>
      </ActionLink>
      <ArrowContainer
        reverseOnMobile={onMobileReverse}
        flex
        row
        justify="flex-start"
        margin={[0, 0.5]}
        tMargin={[0]}
        width="auto"
        height="1em"
      >
        <Arrows arrowColors={arrowColors} left />
        <Arrows arrowColors={arrowColors} />
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
