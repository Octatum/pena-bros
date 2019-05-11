import React, { Component } from 'react';
import { Container } from '../Container';

import QuoteAction from '../QuoteAction';
import ServicesPresentation from './Presentation';

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };

    this.handleClick = this.handleClick.bind(this);

    this.handleHoverClick = this.handleHoverClick.bind(this);
    this.handleHoverClickPrev = this.handleHoverClickPrev.bind(this);
  }

  handleClick(event, index) {
    this.setState({
      current: index,
    });
  }

  handleHoverClick(length) {
    const next = (this.state.current + 1) % length;
    this.setState({
      current: next,
    });
  }

  handleHoverClickPrev(length) {
    const prev =
      this.state.current - 1 < 0 ? length - 1 : this.state.current - 1;

    this.setState({
      current: prev,
    });
  }

  render() {
    const data = this.props.data.sanityServicePage;

    const icons = data.services.map(node => node.icon);

    return (
      <Container>
        <ServicesPresentation
          data={data.services}
          icons={icons}
          handleClick={this.handleClick}
          handleHoverClick={this.handleHoverClick}
          handleHoverClickPrev={this.handleHoverClickPrev}
          current={this.state.current}
        />
        <QuoteAction quote={data.getAQuote} />
      </Container>
    );
  }
}

export default Services;
