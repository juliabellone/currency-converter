import React, { useState, useEffect } from 'react';
import ConversionBox from "./components/conversion-box";
import './App.css';
import { Grid, Content, Title, Container, BoxContainer, Rate } from "./styled-components";


function App() {

  const [currencies, setCurrencies] = useState(['USD', 'EUR']);

  useEffect(() => {

  })

  const getCurrency1 = (currency) => {
    setCurrencies(currencies => currencies.map((item, index) => index === 0 ? currency : item) )
  }
  const getCurrency2 = (currency) => {
    setCurrencies(currencies => currencies.map((item, index) => index === 1 ? currency : item) )
  }
  console.log(currencies)
  return (
    <div className="App">
      <Grid>
        <Content>
          <Title>Currency Converter</Title>
          <Container>
            <BoxContainer>
              <Rate>{currencies[0]}{currencies[1]}</Rate>
              <ConversionBox onSelection={getCurrency1} />
            </BoxContainer>
            <BoxContainer>
            <Rate>{currencies[1]}{currencies[0]}</Rate>
              <ConversionBox onSelection={getCurrency2} />
            </BoxContainer>
          </Container>
        </Content>
      </Grid>
    </div>
  );
}

export default App;
