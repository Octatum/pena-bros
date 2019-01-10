import React from 'react';
import { Container } from '../Container';

const Map = () => (
  <Container flex margin={[2.5, 0]} tMargin={[1,0]}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.261836160887!2d-98.59296408445474!3d29.479558082091362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5dc6f9ae95b5%3A0x7d96b5d6db013468!2s5305+Bandera+Rd%2C+San+Antonio%2C+TX+78238%2C+USA!5e0!3m2!1sen!2smx!4v1541558746350"
      title="Location"
      width="100%"
      height="500"
      frameBorder="0"
      allowFullScreen
    />
  </Container>
);

export default Map;
