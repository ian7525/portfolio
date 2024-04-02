import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #333;
  padding: 20px;
  color: white;
  max-width: 400px;
  margin: 50px auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  h2 {
    text-align: center;
  }
`

const Contact = () => {
  return (
    <Container>
      <h2>Contact Me</h2>
    </Container>
  )
}

export default Contact
