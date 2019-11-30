import styled from "styled-components";


export const Grid = styled.div`
  max-width: 1360px;
  gap: 0 18px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0px;
  margin: auto;
  background-color: #20293e;
`
export const Content = styled.div`
  height: 100vh;
  grid-column: 1/13;
  padding: 0 20px;
  @media only screen and (min-width: 600px) {
    grid-column: 2/12;
    padding: 0;
  }
`

export const Title = styled.h1`
  color: #fff;
`

export const BoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }

`