import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link, navigate } from 'gatsby';
import ReactPaginate from 'react-paginate';

import SubTitle from '../components/SubTitle';
import PageLayout from '../components/PageLayout';
import { Container } from '../components/Container';
import { Image } from '../components/Image';
import Arrow from '../components/Arrows';
import QuoteAction from '../components/QuoteAction';
import { device } from '../utils/device';

const ContLink = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const SubTitleComp = styled(SubTitle)`
  order: 0;

  ${device.tablet} {
    order: -1;
  }
`;
const QuoteActionComp = styled(QuoteAction)`
  order: 0;

  ${device.tablet} {
    order: 1;
  }
`;

const GridComponent = styled.div`
  width: 75%;
  height: auto;
  margin: 5em 10em;

  display: grid;
  grid-template: repeat(3, minmax(10em, 1fr)) / 1fr 1fr 1fr;
  grid-template: repeat(2, auto) / 1fr 1fr 1fr;
  grid-gap: 5em;
  place-items: center;
  grid-auto-flow: row;

  ${device.tablet} {
    grid-gap: 2em 0;
    grid-template: repeat(3, auto) / 1fr 1fr;

    order: 1;
    margin: 0;
    margin-bottom: 5em;
    padding: 0 1em 3em 1em;
    width: 100%;
    background-color: ${({ theme }) => theme.color.black};
  }
`;

const ReactPaginateContainer = styled(Container)`
  ul {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    li {
      padding: 0.5em;

      &:first-child,
      &:last-child {
        padding: 0;
      }

      a {
        margin: 0 0.1em;
        font-weight: bold;
        font-family: ${({ theme }) => theme.fontFamily.main};
        font-size: 1.5em;
      }

      &.selected {
        color: white;
        background-color: ${({ theme }) => theme.color.green};
      }
    }
  }

  ${device.tablet} {
    margin-top: 4em;
    padding: 3em 2em;
    display: none;
  }
`;

const IndexContainer = styled(Container)`
  display: none;

  ${device.tablet} {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.color.black};
  }
`;

const ArrowComp = styled(Arrow)`
  ${device.tablet} {
    transform: scale(1.75);
  }
  ${device.mobile} {
    transform: scale(1.25);
  }
`;

function handleChangePage({ selected, ...rest }, prefix, index) {
  if (selected === 0) {
    navigate('/' + prefix + '/');
  } else {
    navigate('/' + prefix + '/' + (selected + 1));
  }
}

const OurWorks = ({ pathContext }) => {
  const { group, index, pageCount, pathPrefix } = pathContext;

  let previousUrl = index - 1 <= 1 ? '' : (index - 1).toString();
  let nextUrl =
    index + 1 >= pageCount ? pageCount.toString() : (index + 1).toString();

  if (previousUrl === '1') {
    previousUrl = '';
  }
  if (nextUrl === '1') {
    nextUrl = '';
  }
  return (
    <PageLayout>
      <Helmet title="Our Works" />
      <Container flex>
        <GridComponent>
          {group.map(element => {
            const { frontmatter } = element.node;
            return (
              <Container key={element.numericId} flex>
                <Image
                  src={frontmatter.allImages[0]}
                  width="20em"
                  mWidth="100%"
                  height="20em"
                  mHeight="auto"
                  fit="cover"
                />
                <ContLink to={`our-works/works/${element.numericId}`} />
              </Container>
            );
          })}
        </GridComponent>

        <ReactPaginateContainer>
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            previousLabel={
              <ArrowComp
                arrowColors={
                  index === 1 ? ['grey', 'grey'] : ['black', 'green']
                }
                left
              />
            }
            nextLabel={
              <ArrowComp
                arrowColors={
                  index === pageCount ? ['grey', 'grey'] : ['black', 'green']
                }
              />
            }
            breakLabel={'...'}
            onPageChange={i => handleChangePage(i, pathPrefix, index)}
            initialPage={0}
            forcePage={index - 1}
            disableInitialCallback={true}
          />
        </ReactPaginateContainer>

        <IndexContainer
          flex
          row
          width="auto"
          height="auto"
          justify="center"
          tMargin={[4, 0, 0, 0]}
          tPadding={[3, 2]}
          backColor="initial"
        >
          <Container margin={[0, 0.5]} mMargin={[0]} width="auto">
            <ArrowComp
              arrowColors={index === 1 ? ['grey', 'grey'] : ['black', 'green']}
              left
            />
            {index !== 1 && <ContLink to={pathPrefix + '/' + previousUrl} />}
          </Container>

          <Container margin={[0, 0.5]} width="auto">
            <ArrowComp
              arrowColors={
                index === pageCount ? ['grey', 'grey'] : ['black', 'green']
              }
            />
            {index < pageCount && <ContLink to={pathPrefix + '/' + nextUrl} />}
          </Container>
        </IndexContainer>

        <SubTitleComp
          title="What is Lorem Ipsum?"
          size={2}
          margin={[5, 10]}
          tMargin={[3, 5, 0, 5]}
          mMargin={[3, 2, 0, 2]}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </SubTitleComp>

        <QuoteActionComp margin={[5, 0, 0, 0]} />
      </Container>
    </PageLayout>
  );
};

export default OurWorks;
