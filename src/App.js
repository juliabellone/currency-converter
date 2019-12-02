import React, { useState, useEffect } from 'react';
import ConversionBox from "./components/conversion-box";
import './App.css';
import { Grid, Content, Title, Container, BoxContainer, Rate } from "./styled-components";


function App() {

  const [currencies, setCurrencies] = useState(['USD', 'EUR']);
  const [ammounts, setAmmounts] = useState(['',''])
  useEffect(() => {

  })

  const getCurrencyFrom = (currency) => setCurrencies(currencies => currencies.map((item, index) => index === 0 ? currency : item))
  const getCurrencyTo = (currency) => setCurrencies(currencies => currencies.map((item, index) => index === 1 ? currency : item))
  
  const getInputFrom = (ammount) => setAmmounts(ammounts => ammounts.map((item, index) => index === 0 ? ammount : item))
  const getInputTo = (ammount) => setAmmounts(ammounts => ammounts.map((item, index) => index === 1 ? ammount : item))
  
  console.log(ammounts)
  return (
    <div className="App">
      <Grid>
        <Content>
          <Title>Currency Converter</Title>
          <Container>
            <BoxContainer>
              <Rate>{currencies[0]}{currencies[1]}</Rate>
              <ConversionBox onSelection={getCurrencyFrom} onInputChange={getInputFrom}/>
            </BoxContainer>
            <BoxContainer>
            <Rate>{currencies[1]}{currencies[0]}</Rate>
              <ConversionBox onSelection={getCurrencyTo} onInputChange={getInputTo}/>
            </BoxContainer>
          </Container>
        </Content>
      </Grid>
    </div>
  );
}

export default App;
