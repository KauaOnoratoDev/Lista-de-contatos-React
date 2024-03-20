import styled, { createGlobalStyle } from 'styled-components'
import { cores } from './cores'

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
  }

  body {
    background-color: #ccc;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #fff;
  border-radius: 8px;
`

export const Titulo = styled.p`
  font-size: 16px;
`

export const Header = styled.header`
  background-color: ${cores.cinzaClaro};
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;

  img {
    width: 22px;

    &:hover {
      scale: 1.2;
      transition: 0.2s ease;
    }
  }

  button {
    position: absolute;
    left: 24px;
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export default EstiloGlobal
