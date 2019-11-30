import React, { Fragment } from 'react';
import { Box, Rate, BoxHeader, Selector, BoxContent } from "../styled-components/conversion-box";

export default () => (
  <Fragment>
    <Rate></Rate>
    <Box>
      <BoxHeader>
        <Selector>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Selector>
      </BoxHeader>
      <BoxContent>
      </BoxContent>
    </Box>
  </Fragment>
)
