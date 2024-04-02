import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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

const Select = styled.select`
  padding: 8px;
  margin-left: 30px;
  border: none;
  background: black;
  color: white;
  font-size: inherit;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;

  &:focus {
    outline: none;
  }
`

const Header = () => {
  const { i18n } = useTranslation()

  const onChangeLanguage = (e: any) => {
    console.log(e.target.value)
    i18n.changeLanguage(e.target.value)
  }

  return (
    <Container>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/project">Project</Link> */}
        <Link to="/contact">Contact</Link>
        <Select onChange={onChangeLanguage} value={i18n.language}>
          <option value="en">English</option>
          <option value="zh">正體中文</option>
        </Select>
      </Navigation>
    </Container>
  )
}

export default Header
