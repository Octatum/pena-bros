import React, { Component } from 'react';
import styled from 'styled-components';

import ServiceNames from './ServiceNames';

import { Container } from '../../Container';
import { Text } from '../../Text';
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

class ServicesPresentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };

    this.names = props.data.map(data => data.node.frontmatter.name);
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event, index) {
    this.setState({
      current: index,
    });
  }

  render() {
    return (
      <Container flex row justify="flex-start" margin={[0, 0, 5, 0]}>
        <ServiceNameColumn
          handleHover={this.handleHover}
          current={this.state.current}
          names={this.names}
          width="35%"
          height="800px"
        />
        {this.props.data.map((data, index) => {
          return (
            <ServiceView
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
