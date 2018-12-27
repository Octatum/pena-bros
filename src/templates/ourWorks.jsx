import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import SubTitle from '../components/SubTitle';
import PageLayout from '../components/PageLayout';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
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

const PaginationNumber = styled(Text)`
background-color: ${({theme, selected}) => selected ? theme.color.green : ''};
color: ${({theme, selected}) => selected ? theme.color.white : 'initial'};
`;

const GridComponent = styled.div`
  width: auto;
  height: auto;
  margin: 5em 10em;

  display: grid;
  grid-template: repeat(3, minmax(10em, 1fr)) / 1fr 1fr 1fr;
  grid-template: repeat(3, auto) / 1fr 1fr 1fr;
  grid-gap: 5em;
  place-items: center;
  grid-auto-flow: row;
`;

const OurWorks = ({ pathContext, ...props }) => {
  const { group, index, pageCount, pathPrefix } = pathContext;

  const previousUrl = index - 1 <= 1 ? '' : (index - 1).toString();
  const nextUrl =
    index + 1 >= pageCount ? pageCount.toString() : (index + 1).toString();

  return (
    <PageLayout>
      <Helmet title="Our Works" />
      <Container margin={[5, 0, 0, 0]}>
        <GridComponent>
          {group.map(element => {
            const { frontmatter } = element.node;
            return (
              <Container
                key={element.numericId}
                flex
              >
                <Image src={frontmatter.allImages[0]} width="100%" />
                <ContLink to={`our-works/works/${element.numericId}`} />
              </Container>
            );
          })}
        </GridComponent>

        <Container flex row width="auto" height="auto" justify="center">
          <Container margin={[0, 0.5]} width="auto">
            <Arrow color="black" left />
            <ContLink to={pathPrefix + '/' + previousUrl} />
          </Container>

          <PaginationNumber selected={index === 1} margin={[0, 0.1]} padding={[0.25, 0.5]} bold="bold" size={2.5} as={Link} to={`/our-works/`}>1</PaginationNumber>

          {Array.from(new Array(pathContext.pageCount - 2 > 0 ? pathContext.pageCount : 0), (x,i) => i + 2).map((number) => {
            return (
              <PaginationNumber selected={index === number} margin={[0, 0.1]} padding={[0.25, 0.5]} bold="bold" size={2.5} as={Link} to={`/our-works/${number}`} key={number}>{number}</PaginationNumber>
            )
          })}

          <PaginationNumber selected={index === pathContext.pageCount} margin={[0, 0.1]} padding={[0.25, 0.5]} bold="bold" size={2.5} as={Link} to={`/our-works/${pathContext.pageCount}`}>{pathContext.pageCount}</PaginationNumber>

          <Container margin={[0, 0.5]} width="auto">
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
