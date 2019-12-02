import styled from "styled-components";



export const Box = styled.div`
  min-width: 200px;
  max-width: 300px;
  height: 200px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`

export const Selector = styled.div`
  background-color: #2e3d54;
  height: 20%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  select {
    border: none;
    width: 100%;
    background-color: #2e3d54;
    color: #fff;
    
    height: 100%;
    -moz-appearance: none;
    -webkit-appearance: none;
    &:focus{
      outline: none;
    }
  }
  `

export const BoxContent = styled.div`
  padding: 0;
  width: 100%;
  height: 80%;
  input {
    background-color: #293247;
    border: none;
    height: 100%;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    color: #fff;
    font-size: 30px;
    &:focus{
      outline: none;
    }
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
  }
`