import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import SubTitle from '../components/SubTitle';
import PageLayout from '../components/PageLayout';
import { Container } from '../components/Container';
import { Image } from '../components/Image';
import Arrow from '../components/Arrows';
import QuoteAction from '../components/QuoteAction';

const ContLink = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const OurWorks = ({ pathContext, ...props }) => {
  console.log(pathContext);
  const { group, index, pageCount, pathPrefix } = pathContext;

  const previousUrl = index - 1 <= 1 ? '' : (index - 1).toString();
  const nextUrl =
    index + 1 >= pageCount ? pageCount.toString() : (index + 1).toString();

  return (
    <PageLayout>
      <Container margin={[5, 0, 0, 0]}>
        <Container
          flex
          row
          style={{ flexWrap: 'wrap' }}
          height="auto"
          {...props}
        >
          {group.map(element => {
            const { frontmatter } = element.node;
            return (
              <Container
                width="25%"
                height="auto"
                key={element.numericId}
                margin={[0, 2]}
              >
                <Image src={frontmatter.allImages[0]} width="100%" />
                <ContLink to={`our-works/works/${element.numericId}`} />
              </Container>
            );
          })}
        </Container>

        <Container flex row width="auto" height="auto">
          <Container width="auto">
            <Arrow color="black" left />
            <ContLink to={pathPrefix + '/' + previousUrl} />
          </Container>
          <Container width="auto">
            <Arrow color="black" />
            <ContLink to={pathPrefix + '/' + nextUrl} />
          </Container>
        </Container>

        <SubTitle title="What is Lorem Ipsum?" size={3} margin={[0, 10]}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </SubTitle>

        <QuoteAction margin={[5, 0, 0, 0]} />
      </Container>
    </PageLayout>
  );
};

export default OurWorks;
