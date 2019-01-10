import React, { Component } from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import ServiceNames from './ServiceNames';
import ServiceView from './ServiceView';
import ActionButton from '../../ActionButton';
import { numberValues, device } from '../../../utils/device';
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
`;

const Action = styled(ActionButton)`
  position: absolute;
  left: 85%;
  top: 100%;
  width: auto;

  ${device.tablet} {
    left: initial;
    right: 5%;
    top: 100.5%;
  }
`;

const ViewComponent = styled(ServiceView)`
  align-self: flex-start;
`;

const Arrow = styled(Container)`
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

const ArrowsContainer = styled(Container)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

class ServicesPresentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };

    this.names = props.data.map(
      data => data.node.childMarkdownRemark.frontmatter.name
    );
    this.isMobile = false;

    this.handleClick = this.handleClick.bind(this);

    this.handleHoverClick = this.handleHoverClick.bind(this);
    this.handleHoverClickPrev = this.handleHoverClickPrev.bind(this);
  }

  handleClick(event, index) {
    this.setState({
      current: index,
    });
  }

  handleHoverClick() {
    const next = (this.state.current + 1) % this.names.length;
    this.setState({
      current: next,
    });
  }

  handleHoverClickPrev() {
    const prev = (this.state.current - 1) < 0 ? this.names.length - 1 : this.state.current - 1;

    this.setState({
      current: prev,
    })
  }

  render() {
    const isMobile = window && window.innerWidth <= numberValues.laptop;

    return (
      <PresContainer
        flex
        row
        justify="flex-start"
        margin={[0, 0, 5, 0]}
        height="auto"
      >
        <Action reverse={isMobile} name="go to our works" linkTo="/our-works" />
        <Container width="30%" tWidth="100%" height="auto">
          <ServiceNameColumn
            handleClick={this.handleClick}
            current={!isMobile ? this.state.current : 0}
            names={!isMobile ? this.names : [this.names[this.state.current]]}
          />
          {!isMobile ? 
          <Container
            padding={[1]}
            backColor="black"
            onClick={this.handleHoverClick}
            height="auto"
          >
            <Arrow />
          </Container> 
          : 
          <ArrowsContainer height="auto" padding={[0, 1]} flex row justify="space-between">
            <Arrows left onClick={this.handleHoverClickPrev} />
            <Arrows onClick={this.handleHoverClick} />
          </ArrowsContainer>
        }
        </Container>
        {this.props.data.map((data, index) => {
          const { frontmatter } = data.node.childMarkdownRemark;
          return (
            <ViewComponent
              serviceData={frontmatter}
              show={index === this.state.current}
              key={frontmatter.title}
            />
          );
        })}
      </PresContainer>
    );
  }
}

export default ServicesPresentation;
