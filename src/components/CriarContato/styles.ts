import styled from 'styled-components'
import { cores } from '../../Styles/cores'

export const InformacoesContato = styled.div`
  width: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 213px;
    height: 213px;
    border-radius: 50%;
    margin-top: 20px;
  }
`

export const Informacoes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    padding: 16px;
    background-color: ${cores.cinzaClaro};
    margin-bottom: 24px;
    border: none;
    font-size: 16px;
  }

  label {
    color: #6a6a6a;
  }
`

export const ContainerBotoes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 60%;
  position: absolute;
  bottom: 10px;
  padding: 16px;

  button {
    font-size: 16px;
    padding: 14px;
    justtify-content: center;
  }
`
