import React, { useState, useEffect } from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

import { UNSET, PENDING, SUCCESS, FAILURE } from '../constants/status'
import StatusText from '../components/statusText'
import { getRhyme } from '../backend/generator'

function Home() {
    
  const [status, setStatus] = useState(UNSET)
  const [rhymes, setRhymes] = useState([])
  const [idx, setIdx] = useState(0)
  const [error, setError] = useState(UNSET)

  useEffect(() => {
    rhymes.forEach((line) => {
      let msg = new SpeechSynthesisUtterance()
      msg.text = line
      msg.lang = 'es'
      window.speechSynthesis.speak(msg)
    })
  }, [rhymes])

  return (
    <Container>
      <Header as='h2'>Bienvenido a freestyle generator</Header>
      <Button
        onClick={
          () => {
            setStatus(PENDING)
            getRhyme(idx).then(
              res => {
                setStatus(SUCCESS)
                setRhymes(res)
                setIdx(idx+1)
              }
            ).catch(
              error => {
                setStatus(FAILURE)
                setError(error.message)
              }
            )}}>
        Generar
      </Button>
      <StatusText status={status} lines={rhymes} error={error} />
    </Container>
  )
}

export default Home