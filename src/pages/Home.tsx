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

const ResumeContainer = styled.p`
  font-size: 20px;

  a {
    color: inherit;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`

const ImgContainer = styled.div`
  flex: 1;
`

const AvatarImg = styled.img`
  width: 300px;
  height: 300px;
`

const Home = () => {
  const engResume =
    'https://drive.google.com/file/d/1arRYADjQ9ND2lJdC2y3skm-N2P1Kkkbu/view?usp=drive_link'
  const chtResume =
    'https://drive.google.com/file/d/1mkTWVtwl4Fc6_RZEteQQbdUoxxiC3u3o/view?usp=drive_link'

  return (
    <Container>
      <GreetingContainer>
        <h2>Hi There!</h2>
        <p>I'm Ian</p>
        <ResumeContainer>
          My Resume:{' '}
          <a href={engResume} target="_blank" rel="noopener noreferrer">
            ENG.
          </a>{' '}
          <a href={chtResume} target="_blank" rel="noopener noreferrer">
            CHT.
          </a>
        </ResumeContainer>
      </GreetingContainer>
      <ImgContainer>
        <AvatarImg className="Avatar" src={AvatarImages} alt="" />
      </ImgContainer>
    </Container>
  )
}

export default Home
