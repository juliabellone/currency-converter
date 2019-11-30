import React, { useState, useEffect } from 'react';
import { Selector } from '../styled-components/conversion-box';
// import { getAllCurrencies } from '../services/apilayer';

export default () => {
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
  return (
  <Selector>
    {currencies && Object.keys(currencies).map((currency, index) => (
      <option value={currency} key={index}>{currencies[currency]}</option>
    ))}
  </Selector>
  )
}