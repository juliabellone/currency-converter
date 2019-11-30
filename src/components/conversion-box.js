import React, { Fragment, useState, useEffect } from 'react';
import { Box, Selector, BoxContent} from "../styled-components/conversion-box";

export default ({ onSelection, onInputChange }) => {
  const [currencies, setCurrencies] = useState([])
  
  useEffect(
    () => {
      (async () => { 
        const data = await fetch('http://apilayer.net/api/list?access_key=aeae5c476f3927d585531d23456b680a&format=1')
        const res = await data.json();
        setCurrencies(res.currencies)
        console.log(res)
      })();
    },[])

  const sendCurrency = (value) => {
    onSelection(value)
  }
  const sendInputValue = (value) => {
    onInputChange(value)
  }
  return (
    <Fragment>
      <Box>
        <Selector>
            <select onChange={(e) => sendCurrency(e.target.value)}>
              {currencies && Object.keys(currencies).map((currency, index) => (
                <option 
                  value={currency} 
                  key={index}
                >
                  {currencies[currency]}
                </option>
              ))}
            </select>
        </Selector>
        <BoxContent>
          <input
            onChange={(e) => sendInputValue(e.targetValue)}
          />
        </BoxContent>
      </Box>
    </Fragment>
  )
}
