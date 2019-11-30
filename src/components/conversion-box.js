import React, { Fragment } from 'react';
import { Box, Rate, BoxHeader, BoxContent } from "../styled-components/conversion-box";
import Selector from './selector';
export default () => (
  <Fragment>
    <Rate></Rate>
    <Box>
      <BoxHeader>
        <Selector/>
      </BoxHeader>
      <BoxContent>
      </BoxContent>
    </Box>
  </Fragment>
)
