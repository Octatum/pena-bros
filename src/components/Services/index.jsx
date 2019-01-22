import React, { Fragment, Component } from 'react';
import { Container } from '../Container';
import { StaticQuery, graphql } from 'gatsby';

import QuoteAction from '../QuoteAction';
import ServicesPresentation from './Presentation';
import Comparison from './Comparison';

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
      this.state.current - 1 < 0
        ? length - 1
        : this.state.current - 1;

    this.setState({
      current: prev,
    });
  }

  render() {
    return (
      <Container>
        <StaticQuery
          query={graphql`
        query getServices {
          allFile(
            filter: {
              sourceInstanceName: { eq: "services" }
              name: { ne: ".gitkeep" }
            }
          ) {
            Presentation: edges {
              node {
                name
                relativePath
                childMarkdownRemark {
                  frontmatter {
                    title
                    icon
                    image
                    description
                  }
                }
              }
            }
            Comparison: edges {
              node{
                childMarkdownRemark{
                  frontmatter{
                    oldCarsWorks
                    newCarsWorks
                    oldCarServiceTitle
                    oldCarServicDescription
                    newCarServiceTitle
                    newCarServiceDescription
                  }
                }
              }
            }
          }
        }
      `}
          render={data => {
            const icons = data.allFile.Presentation.map(
              data => data.node.childMarkdownRemark.frontmatter.icon
            )
            return (
              <Fragment>
                <ServicesPresentation 
                  data={data.allFile.Presentation} 
                  icons={icons} 
                  handleClick={this.handleClick}
                  handleHoverClick={this.handleHoverClick}
                  handleHoverClickPrev={this.handleHoverClickPrev}
                  current={this.state.current}
                />
                <Comparison 
                  height="auto" 
                  margin={[0, 0, 7, 0]} 
                  data={data.allFile.Comparison[this.state.current]} 
                  current={this.state.current}
                />
              </Fragment>
            )
          }}
        />
        <QuoteAction />
      </Container>
    )
  }
}

export default Services;

