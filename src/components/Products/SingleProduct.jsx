import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import { Flex, Box } from 'rebass';
import RebassText from '../RebassText';

const IndivProd = ({ title, image, description, show, ...props }) => {
  return (
    <Flex
      bg="green"
      p={5}
      flexDirection={['column', null, 'row']}
      style={{ maxWidth: 1300 }}
    >
      <Box width={[1, null, 0.5]} px={3}>
        <RebassText fontSize={6} fontWeight="bold" as="h2" color="white">
          {title}
        </RebassText>
        <Box pl={2} mt={1} ml={1} style={{ borderLeft: '4px solid black' }}>
          <RebassText lineHeight={2} color="white" fontSize={3}>
            {description}
          </RebassText>
        </Box>
      </Box>
      <Box width={[1, null, 0.5]} px={3} pt={[4, null, 0]}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{ height: '100%' }}
        >
          <GatsbyImage
            style={{ width: '100%', maxWidth: '1000px' }}
            fluid={image.asset.fluid}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

IndivProd.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string,
  show: PropTypes.bool,
};

export default IndivProd;
