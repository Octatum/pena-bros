import React from 'react';
import { Container } from '../Container';

const Map = () => (
  <Container flex>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7193.359043256114!2d-100.29332622956551!3d25.648759881340315!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8662bfb88c0497f7%3A0xaf36f22f24978c85!2sTecnol%C3%B3gico%2C+Monterrey%2C+Nuevo+Leon!3m2!1d25.6519561!2d-100.29042489999999!5e0!3m2!1sen!2smx!4v1541443891217"
      title="Location"
      width="100%"
      height="500"
      frameBorder="0"
      allowFullScreen
    />
  </Container>
);

export default Map;
