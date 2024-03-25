import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  font-size: 30px;
  color: white;


  height: calc(100vh - 50px - 60px);
`

const Contact = () => {
  return <Container>Contact</Container>
}

export default Contact
