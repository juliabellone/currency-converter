import React, { useState, useEffect } from 'react';
// import ConversionBox from "./components/conversion-box";
import './App.css';
import { Grid, Content, Title, Container, BoxContainer, Rate } from "./styled-components";
import { Box, Selector, BoxContent} from "./styled-components/conversion-box";
import { getAllCurrencies, getExchangeRate } from "./services/apilayer";

function App() {
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [selCurrencies, setSelCurrencies] = useState({from: 'USD', to: 'EUR'})
  const [amounts, setAmounts] = useState({from: 1, to: ''})
  const [rate, setRate] = useState();
  const shortRate = rate ? rate.toFixed(2): '';
  const shortReversedRate = rate ? (1/rate).toFixed(2) : '';

  useEffect(
    async() => {
      const res = await getAllCurrencies()
      setAllCurrencies(res.currencies)
    },[])

  useEffect(
    () => {
      (async() => { 
        const res = await getExchangeRate(selCurrencies.to)
        const code = `${selCurrencies.from}${selCurrencies.to}`
        setRate(res.quotes[code])
      })();
    },[selCurrencies]) 

  useEffect(() => {
    setAmounts({...amounts, to:(amounts.from*rate).toFixed(2)})
  },[rate])

  const changeCurrencies = (e) => {
    setSelCurrencies({...selCurrencies, to: e.target.value})
  }

  const changeFrom = (e) => setAmounts({from:e.target.value, to:(e.target.value*rate).toFixed(2)})
  const changeTo = (e) => setAmounts({to:e.target.value, from:(e.target.value*(1/rate)).toFixed(2)})

  return (
    <div className="App">
      <Grid>
        <Content>
          <Title>Currency Converter</Title>
          <Container>
            <BoxContainer>
            <Rate>{`1 ${selCurrencies.from} = ${shortRate} ${selCurrencies.to}`}</Rate>
            <Box>
              <Selector>
                  <select
                    value={selCurrencies.from}
                    // onChange = {(e) => setSelCurrencies({...selCurrencies, from: e.target.value})}
                  >
                    {allCurrencies && Object.keys(allCurrencies).map((currency, index) => (
                      <option 
                        value={currency} 
                        key={index}
                      >
                        {allCurrencies[currency]}
                      </option>
                    ))}
                  </select>
              </Selector>
              <BoxContent>
                <input
                  value={amounts.from}
                  onChange={(e) => changeFrom(e)}
                />
              </BoxContent>
            </Box>
            </BoxContainer>
            <BoxContainer>
            <Rate>{`1 ${selCurrencies.to} = ${shortReversedRate} ${selCurrencies.from}`}</Rate>
            <Box>
              <Selector>
                <select
                  value={selCurrencies.to}
                  onChange = {(e) => changeCurrencies(e)}
                >
                  {allCurrencies && Object.keys(allCurrencies).map((currency, index) => (
                    <option 
                      value={currency} 
                      key={index}
                    >
                      {allCurrencies[currency]}
                    </option>
                  ))}
                  </select>
              </Selector>
              <BoxContent>
                <input
                  value={amounts.to}
                  onChange={(e) => changeTo(e)}
                />
              </BoxContent>
            </Box>
            </BoxContainer>
          </Container>
        </Content>
      </Grid>
    </div>
  );
}

export default App;
