import React from 'react'
import styled from 'styled-components'

import AvatarImages from '../imgs/avatar.png'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: white;
  height: calc(100vh - 50px - 60px);
`

const GreetingContainer = styled.div`
  flex: 1;
`

const ImgContainer = styled.div`
  flex: 1;
`

const AvatarImg = styled.img`
  width: 300px;
  height: 300px;
`

const Home = () => {
  return (
    <Container>
      <GreetingContainer>
        <h2>Hi There!</h2>
        <p>I'm Ian</p>
      </GreetingContainer>
      <ImgContainer>
        <AvatarImg className="Avatar" src={AvatarImages} alt="" />
      </ImgContainer>
    </Container>
  )
}

export default Home
