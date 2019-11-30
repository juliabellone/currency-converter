import React, { useState, useEffect } from 'react';
import ConversionBox from "./components/conversion-box";
import './App.css';
import { Grid, Content, Title, BoxesContainer} from "./styled-components";

function App() {
  const [currencies, setCurrencies] = useState([])
  return (
    <div className="App">
      <Grid>
        <Content>
          <Title>Currency Converter</Title>
          <BoxesContainer>
            <ConversionBox/>
            <ConversionBox/>
          </BoxesContainer>
        </Content>
      </Grid>
    </div>
  );
}

export default App;
