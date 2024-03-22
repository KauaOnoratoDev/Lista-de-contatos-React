import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 24px 36px;
  overflow-y: auto;
`

export const ContainerContato = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: translate(5px);
  }
`

export const Img = styled.img`
  width: 32px;
  border-radius: 50%;
  margin-right: 16px;
`
