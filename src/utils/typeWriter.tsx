import React from 'react'
import Typewriter from 'typewriter-effect'

interface TypeWriterProps {
  strings: string[]
}

const TypeWriter: React.FC<TypeWriterProps> = ({ strings }) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
      }}
    />
  )
}

export default TypeWriter
