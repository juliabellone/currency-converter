import React, { Fragment } from 'react';
import { Box, Rate, BoxHeader, BoxContent } from "../styled-components/conversion-box";
import Selector from './selector';
import Input from './input';
export default () => (
  <Fragment>
    <Rate></Rate>
    <Box>
      <BoxHeader>
        <Selector/>
      </BoxHeader>
      <BoxContent>
        <Input/>
      </BoxContent>
    </Box>
  </Fragment>
)
