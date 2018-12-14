import React from 'react';
import { Container } from '../Container';
import SubTitle from '../SubTitle';

const OurWorks = () => (
  <Container margin={[5, 0]}>
    <SubTitle title="What is Lorem Ipsum?" size={3} margin={[0, 10]}>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English.
    </SubTitle>
  </Container>
);

export default OurWorks;
