import styled from 'styled-components'
import { cores } from '../../Styles/cores'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 12px 0;
`

export const Campo = styled.input`
  width: 90%;
  padding: 16px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${cores.cinzaClaro};
`

export const BotaoPesquisa = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    scale: 1.2;
  }
`

export const BotaoAdicionar = styled.button`
  width: 56px;
  height: 56px;
  background-color: ${cores.azul};
  border-radius: 50%;
  font-size: 48px;
  color: #fff;
  border: none;
  position: absolute;
  right: 25px;
  bottom: 25px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    scale: 1.2;
  }

  @media (max-width: 768px) {
    position: ;
  }
`
