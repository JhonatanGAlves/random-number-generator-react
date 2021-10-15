import React from 'react'
import styled from 'styled-components'
import MainPage from './components/MainPage'

function App() {
  return (
    <MainContainer>
      <MainPage />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #F8F8F8;
`

export default App