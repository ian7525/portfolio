import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  background: #1b1a55;
  color: white;
  text-align: center;
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
`

const Footer = () => {
  return (
    <Container>
      <p>Copyright @ {new Date().getFullYear()} | All Rights Reserved.</p>
    </Container>
  )
}

export default Footer
