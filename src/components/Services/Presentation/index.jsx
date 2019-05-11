import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../../Container';
import ServiceNames from './ServiceNames';
import ServiceView from './ServiceView';
import ActionButton from '../../ActionButton';
import { device } from '../../../utils/device';
import Arrows from '../../Arrows';

const ServiceNameColumn = styled(ServiceNames)`
  min-height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  ::-webkit-scrollbar-track {
    background: #333;
  }

  ${device.tablet} {
    display: none;
  }
`;
const ServiceNameColumnMobile = styled(ServiceNames)`
  display: none;
  ${device.tablet} {
    display: initial;
  }
`;

const Action = styled(ActionButton)`
  position: absolute;
  left: 80%;
  top: 100%;
  width: auto;

  ${device.tablet} {
    left: initial;
    right: 5%;
    top: 101%;
  }
`;

const ViewComponent = styled(ServiceView)`
  align-self: flex-start;
`;

const BottomArrow = styled(Container)`
  width: 0;
  height: 0;
  left: -0.1em;
  border-left: 0.9em solid transparent;
  border-right: 0.9em solid transparent;

  border-top: 1.5em solid white;

  margin: auto;
`;

const PresContainer = styled(Container)`
  align-items: stretch;
  ${device.tablet} {
    flex-direction: column;
  }
`;

const ArrowContainer = styled(Container)`
  cursor: pointer;
  ${device.tablet} {
    display: none;
  }
`;
const ArrowsContainerMobile = styled(Container)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: none;

  ${device.tablet} {
    display: flex;
  }
`;

const ServicesPresentation = ({
  data,
  current,
  icons,
  handleClick,
  handleHoverClick,
  handleHoverClickPrev,
  ...props
}) => {
  const names = data.map(node => node.title);

  return (
    <PresContainer
      {...props}
      flex
      row
      justify="flex-start"
      margin={[0, 0, 5, 0]}
      height="auto"
    >
      <Action name="go to our works" linkTo="/our-works" />
      <Container width="30%" tWidth="100%" height="auto">
        <ServiceNameColumn
          handleClick={handleClick}
          current={current}
          icons={icons}
          names={names}
        />
        <ServiceNameColumnMobile
          handleClick={handleClick}
          current={0}
          icons={[icons[current]]}
        />

        <ArrowContainer
          padding={[1]}
          backColor="black"
          onClick={() => handleHoverClick(icons.length)}
          height="auto"
        >
          <BottomArrow />
        </ArrowContainer>
        <ArrowsContainerMobile
          height="auto"
          padding={[0, 1]}
          flex
          row
          justify="space-between"
        >
          <Arrows
            left
            onClick={() => handleHoverClickPrev(icons.length)}
            arrowColors={['white', 'white']}
          />
          <Arrows
            onClick={() => handleHoverClick(icons.length)}
            arrowColors={['white', 'white']}
          />
        </ArrowsContainerMobile>
      </Container>
      {data.map((node, index) => (
        <ViewComponent
          serviceData={node}
          show={index === current}
          key={node.title}
        />
      ))}
    </PresContainer>
  );
};

ServicesPresentation.propTypes = {
  data: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  icons: PropTypes.array,
  handleClick: PropTypes.func,
  handleHoverClick: PropTypes.func,
  handleHoverClickPrev: PropTypes.func,
};

export default ServicesPresentation;
