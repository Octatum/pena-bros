import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Container } from '../Container';
import SubTitle from '../SubTitle';
import Presentation from './Presentation';
import Quote from './Quote';
import WorksPreview from './WorksPrev';
import QuoteAction from '../QuoteAction';

const HomePage = props => {
  const { data: homepageData } = props;

  return (
    <Container flex height="auto">
      <Presentation margin={[0, 0, 2, 0]} />
      <SubTitle
        size={2.5}
        title={homepageData.subtext1}
        margin={[2, 'auto']}
        width="75%"
        tWidth="90%"
      >
        {homepageData.subtext2}
      </SubTitle>
      <Quote
        margin={[5, 0]}
        tMargin={[2, 0]}
        size={3}
        data={homepageData.customerReviews}
      />
      <WorksPreview margin={[5, 0]} tMargin={[2, 0]} />
      <QuoteAction quote={homepageData.quote} />
    </Container>
  );
};
export default HomePage;
