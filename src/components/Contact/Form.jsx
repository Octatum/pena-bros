import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { navigateTo } from 'gatsby-link';

import { device } from '../../utils/device';
import { Container } from '../Container';
import { Text } from '../Text';



function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class GetInTouch extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const self = this;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...self.state,
      }),
    })
      .then(() => {
        alert('Your message was sent!');
        navigateTo(form.getAttribute('action'));
      })
      .catch(error => alert(error));
  };

  render() {
    return (
      <Container
        as="form"
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        
      </Container>
    );
  }
}

export default GetInTouch;
