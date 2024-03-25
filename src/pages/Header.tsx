import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Container = styled.header`
  background: #1b1a55;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  justify-content: right;
  alian-item: center;
`

const Navigation = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin-left: 20px;

    &:hover {
      color: #aaa;
      text-decoration: #aaa underline;
    }
  }
`

const Header = () => {
  return (
    <Container>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/project">Project</Link> */}
        <Link to="/contact">Contact</Link>
      </Navigation>
    </Container>
  )
}

export default Header
