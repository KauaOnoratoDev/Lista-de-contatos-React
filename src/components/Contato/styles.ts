import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 24px 36px;
  overflow-y: auto;
`

export const ContainerContato = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;

  &:hover {
    scale: 1.05;
    transition: 0.5s alternate;
  }
`

export const Img = styled.img`
  width: 32px;
  border-radius: 50%;
  margin-right: 16px;
`
