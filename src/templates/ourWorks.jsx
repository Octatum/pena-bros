import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link, navigate } from 'gatsby';

import SubTitle from '../components/SubTitle';
import PageLayout from '../components/PageLayout';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { Image } from '../components/Image';
import Arrow from '../components/Arrows';
import QuoteAction from '../components/QuoteAction';
import { device, numberValues } from '../utils/device';

const ContLink = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const PaginationNumber = styled(Text)`
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.green : ''};
  color: ${({ theme, selected }) => (selected ? theme.color.white : 'initial')};
`;

const GridComponent = styled.div`
  width: 75%;
  height: auto;
  margin: 5em 10em;

  display: grid;
  grid-template: repeat(3, minmax(10em, 1fr)) / 1fr 1fr 1fr;
  grid-template: repeat(3, auto) / 1fr 1fr 1fr;
  grid-gap: 5em;
  place-items: center;
  grid-auto-flow: row;

  ${device.tablet} {
    grid-gap: 3em;
    grid-template: repeat(3, auto) / 1fr;

    order: 1;
    margin: 0;
    margin-bottom: 5em;
    padding: 0 0 3em 0;
    width: 100%;
    background-color: ${({ theme }) => theme.color.black};
  }
`;

const ArrowComp = styled(Arrow)`
  ${device.tablet} {
    transform: scale(2);
  }
`;

class OurWorks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentInnerPage: 0,
    };

    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick(isNext, url, maxInnerPages, isFirst, isLast) {
    const current = this.state.currentInnerPage;
    let next = isNext ? current + 1 : current - 1;

    if (next < 0 && !isFirst) {
      navigate(url);
    }
    if (next >= 3 && !isLast) {
      navigate(url);
    }
    if (next >= maxInnerPages) {
      next = current;
    }

    if (next < 0) {
      next = 0;
    }
    if (next >= 3) {
      next = 2;
    }

    this.setState({
      currentInnerPage: next,
    });
  }

  render() {
    const { group, index, pageCount, pathPrefix } = this.props.pathContext;

    const maxInnerPages = Math.ceil(group.length / 3);
    let isMobile = false;
    if (typeof window !== 'undefined') {
      isMobile = window.innerWidth <= numberValues.tablet;
    }
    let mobileGroup;
    if (isMobile) {
      mobileGroup = group.slice(
        this.state.currentInnerPage * 3,
        this.state.currentInnerPage * 3 + 3
      );
    }
    console.log(
      mobileGroup,
      this.state.currentInnerPage * 3,
      this.state.currentInnerPage * 3 + 3
    );
    console.log(this.state.currentInnerPage);

    let previousUrl = index - 1 <= 1 ? '' : (index - 1).toString();
    let nextUrl =
      index + 1 >= pageCount ? pageCount.toString() : (index + 1).toString();

    if (previousUrl === '1') {
      previousUrl = '';
    }
    if (nextUrl === '1') {
      nextUrl = '';
    }

    const groupToUse = isMobile ? mobileGroup : group;

    return (
      <PageLayout>
        <Helmet title="Our Works" />
        <Container flex>
          <GridComponent>
            {groupToUse.map(element => {
              const { frontmatter } = element.node;
              return (
                <Container key={element.numericId} flex>
                  {isMobile && (
                    <Text white bold="bold" size={4} margin={[1, 0, 2, 0]}>
                      {frontmatter.title}
                    </Text>
                  )}
                  <Image
                    src={frontmatter.allImages[0]}
                    width="15em"
                    mWidth="10em"
                    height="15em"
                    mHeight="10em"
                  />
                  <ContLink to={`our-works/works/${element.numericId}`} />
                </Container>
              );
            })}
          </GridComponent>

          <Container
            flex
            row
            width={isMobile ? '100%' : 'auto'}
            height="auto"
            justify={isMobile ? 'flex-start' : 'center'}
            tMargin={[4, 0, 0, 0]}
            tPadding={[3, 2]}
            backColor={isMobile ? 'black' : 'initial'}
          >
            <Container margin={[0, 0.5]} width="auto">
              <ArrowComp
                color={
                  isMobile
                    ? this.state.currentInnerPage === 0 && index === 1
                      ? 'grey'
                      : 'green'
                    : index !== 1
                      ? 'black'
                      : 'grey'
                }
                left
                onClick={isMobile =>
                  isMobile
                    ? this.handleArrowClick(
                        false,
                        pathPrefix + '/' + previousUrl,
                        maxInnerPages,
                        index === 1,
                        index === pageCount
                      )
                    : null
                }
              />
              {!isMobile &&
                index !== 1 && <ContLink to={pathPrefix + '/' + previousUrl} />}
            </Container>

            {!isMobile && (
              <Fragment>
                <PaginationNumber
                  selected={index === 1}
                  margin={[0, 0.1]}
                  padding={[0.25, 0.5]}
                  bold="bold"
                  size={2.5}
                  as={Link}
                  to={`/our-works/`}
                >
                  1
                </PaginationNumber>
                {Array.from(
                  new Array(pageCount - 2 > 0 ? pageCount : 0),
                  (x, i) => i + 2
                ).map(number => {
                  return (
                    <PaginationNumber
                      selected={index === number}
                      margin={[0, 0.1]}
                      padding={[0.25, 0.5]}
                      bold="bold"
                      size={2.5}
                      as={Link}
                      to={`/our-works/${number}`}
                      key={number}
                    >
                      {number}
                    </PaginationNumber>
                  );
                })}
                {pageCount > 1 && (
                  <PaginationNumber
                    selected={index === pageCount}
                    margin={[0, 0.1]}
                    padding={[0.25, 0.5]}
                    bold="bold"
                    size={2.5}
                    as={Link}
                    to={`/our-works/${pageCount}`}
                  >
                    {pageCount}
                  </PaginationNumber>
                )}
              </Fragment>
            )}

            <Container margin={[0, 0.5]} width="auto">
              <ArrowComp
                color={
                  isMobile
                    ? this.state.currentInnerPage === maxInnerPages - 1 &&
                      index === pageCount
                      ? 'grey'
                      : 'green'
                    : index < pageCount
                      ? 'black'
                      : 'grey'
                }
                onClick={isMobile =>
                  isMobile
                    ? this.handleArrowClick(
                        true,
                        pathPrefix + '/' + nextUrl,
                        maxInnerPages,
                        index === 1,
                        index === pageCount
                      )
                    : null
                }
              />
              {!isMobile &&
                index < pageCount && (
                  <ContLink to={pathPrefix + '/' + nextUrl} />
                )}
            </Container>
          </Container>

          <SubTitle
            title="What is Lorem Ipsum?"
            size={3}
            margin={[5, 10]}
            tMargin={[5, 5, 0, 5]}
            style={isMobile ? { order: -1 } : { order: 0 }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </SubTitle>

          <QuoteAction
            margin={[5, 0, 0, 0]}
            style={isMobile ? { order: 1 } : { order: 0 }}
          />
        </Container>
      </PageLayout>
    );
  }
}

export default OurWorks;
