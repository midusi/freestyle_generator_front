import React, { useState } from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

import { UNSET, PENDING, SUCCESS, FAILURE } from '../constants/status'
import StatusText from '../components/statusText'
import { getRhyme } from '../backend/generator'

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
            getRhyme().then(
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
    </Container>
  )
}

export default Home