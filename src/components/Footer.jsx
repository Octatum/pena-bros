import React from 'react';
import { Flex, Box } from '@rebass/grid';
import { Text } from './Text';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.black};
`;

function Footer() {
  return (
    <Flex>
      <StyledBox width={1} py={3}>
        <Text align="center" color="white">
          Copyright © All rights reserved. Peña Brothers Upholstery{' '}
          {new Date().getFullYear()}.
        </Text>
      </StyledBox>
    </Flex>
  );
}

export default Footer;
