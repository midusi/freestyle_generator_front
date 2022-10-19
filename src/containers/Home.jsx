import React, { useState } from 'react'
import { Button, Container, Header, Icon } from 'semantic-ui-react'

import { UNSET, PENDING, SUCCESS, FAILURE } from '../constants/status'
import StatusText from '../components/statusText'
import { getRhyme } from '../backend/generator'

const play = (rhymes) => {
  let msg = new SpeechSynthesisUtterance()
  msg.text = rhymes.join('. ')
  msg.lang = 'es'
  msg.rate = 1.1
  window.speechSynthesis.speak(msg)
}

function Home() {
  const [status, setStatus] = useState(UNSET)
  const [rhymes, setRhymes] = useState([])
  const [error, setError] = useState(UNSET)

  return (
    <Container>
      <Header as='h2'>Bienvenido a freestyle generator</Header>
      <Button
        onClick={
          () => {
            setStatus(PENDING)
            getRhyme(Math.floor(Math.random() * 100)).then(
              res => {
                setStatus(SUCCESS)
                setRhymes(res)
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
      {
        status === SUCCESS && 'speechSynthesis' in window ? (
          <Button icon onClick={() => play(rhymes)}>
            <Icon name='play circle outline' />
          </Button>
        ) : null
      }
      
    </Container>
  )
}

export default Home
