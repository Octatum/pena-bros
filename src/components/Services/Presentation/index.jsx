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

    this.handleClick = this.handleClick.bind(this);

    this.handleHoverClick = this.handleHoverClick.bind(this);
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

  render() {
    return (
      <Container flex row justify="flex-start" margin={[0, 0, 5, 0]}>
        <Container width="30%">
          <ServiceNameColumn
            handleClick={this.handleClick}
            current={this.state.current}
            names={this.names}
            height="90vh"
          />

          <Container
            padding={[1]}
            backColor="black"
            onClick={this.handleHoverClick}
            height="auto"
          >
            <Arrow />
          </Container>
        </Container>
        {this.props.data.map((data, index) => {
          return (
            <ViewComponent
              serviceData={data.node.frontmatter}
              height="90vh"
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
