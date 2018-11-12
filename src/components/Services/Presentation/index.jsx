import React, { Component } from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import ServiceNames from './ServiceNames';
import ServiceView from './ServiceView';

const ServiceNameColumn = styled(ServiceNames)`
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

class ServicesPresentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };

    this.names = props.data.map(data => data.node.frontmatter.name);
    this.hoverInterval = null;

    this.handleHover = this.handleHover.bind(this);
    this.handleHoverScroll = this.handleHoverScroll.bind(this);
    this.handleHoverClick = this.handleHoverClick.bind(this);
    this.handleStopInterval = this.handleStopInterval.bind(this);
  }

  handleHover(event, index) {
    this.setState({
      current: index,
    });
  }

  handleHoverScroll() {
    this.hoverInterval = setInterval(() => {
      const next = (this.state.current + 1) % this.names.length;
      this.setState({
        current: next,
      });
    }, 1000);
  }

  handleHoverClick() {
    const next = (this.state.current + 1) % this.names.length;
    this.setState({
      current: next,
    });
  }

  handleStopInterval() {
    clearInterval(this.hoverInterval);
  }

  render() {
    return (
      <Container flex row justify="flex-start" margin={[0, 0, 5, 0]}>
        <Container width="30%">
          <ServiceNameColumn
            handleHover={this.handleHover}
            current={this.state.current}
            names={this.names}
            height="800px"
          />
          {this.names.length > 5 ? (
            <Container
              padding={[1]}
              backColor="black"
              onMouseOver={this.handleHoverScroll}
              onClick={this.handleHoverClick}
              onMouseLeave={this.handleStopInterval}
            >
              <Arrow />
            </Container>
          ) : (
            ''
          )}
        </Container>
        {this.props.data.map((data, index) => {
          return (
            <ViewComponent
              serviceData={data.node.frontmatter}
              height="800px"
              show={index === this.state.current}
              key={index}
            />
          );
        })}
      </Container>
    );
  }
}

export default ServicesPresentation;
