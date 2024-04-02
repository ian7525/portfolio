import React, { useState } from 'react'
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

const FromGroup = styled.div`
  margin-bottom: 15px;
  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
  }

  textarea {
    height: 100px;
  }
`

const EmailSubmit = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  width: 100%;

  &::hover {
    background-color: #0056b3;
  }
`

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log('Submit')
  }

  return (
    <Container>
      <h2>Contact Me</h2>
    </Container>
  )
}

export default Contact
