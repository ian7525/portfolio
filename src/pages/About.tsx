import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  height: calc(100vh - 50px - 60px);
`

const Introduce = styled.div`
  font-size: 30px;
  text-align: justify;
  color: white;
  padding: 50px 150px;
  text-justify: inter-word;
`

const Skill = styled.div`
  font-size: 30px;
  color: white;
  padding: 50px 150px;
  text-align: left;

  a {
    color: inherit;
    text-decoration: underline;

    &:hover{
      text-decoration: none;
    }
  }
`

const About = () => {

  const awsBadgeLink = 'https://www.credly.com/badges/55b51fa9-79ee-478a-a6b9-aabd9b310b40/public_url'
  return (
    <Container>
      <Introduce>
        Hello, I am a seasoned Senior Software Engineer with nearly a decade of
        comprehensive experience, expertise in full-stack development with a
        pronounced focus on backend technologies and substantial proficiency in
        AWS, API optimization, and database architecture. Recognized for a
        strong work ethic, the ability to excel both in teams and solo, and a
        commitment to knowledge sharing
      </Introduce>
      <Skill>
        <p> Languages : TypeScript, JavaScript </p>
        <p>Databases : PostgreSQL,</p>
        <p>MySQL Web Technologies : HTML, CSS, React, Node.js </p>
        <p>Version Controls :GIT</p>
        <p> Cloud Technologies: <a href={awsBadgeLink} target="_blank" rel="noopener noreferrer">AWS</a></p>
      </Skill>
    </Container>
  )
}

export default About
