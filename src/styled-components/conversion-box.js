import styled from "styled-components";



export const Box = styled.div`
  min-width: 200px;
  max-width: 300px;
  height: 200px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`
export const Rate = styled.span`
  text-transform: uppercase;
  color: #fff;
`

export const BoxHeader = styled.div`
  background-color: #2e3d54;
  height: 20%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`
export const Selector = styled.select`
  border: none;
  width: 100%;
  background-color: #2e3d54;
  color: #fff;

  height: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
`

export const BoxContent = styled.div`
  background-color: #293247;
  width: 100%;
  height: 80%;

`