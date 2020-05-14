import React, { useState } from 'react'
import { Input, Container, Header } from 'semantic-ui-react'

import { UNSET, PENDING, SUCCESS, FAILURE, OUTDATED } from '../constants/status'
import StatusText from '../components/statusText'
import { getRhyme } from '../backend/generator'

function Home() {
    
    const [word, setWord] = useState('')
    const [status, setStatus] = useState(UNSET)
    const [rhyme, setRhyme] = useState(UNSET)
    const [error, setError] = useState(UNSET)

    return (
        <Container>
            <Header as='h2'>Bienvenido a freestyle generator</Header>
            <Header as='h4'>Ingrese una palabra para generar la rima</Header>
            <Input
                value={word}
                onChange={(e,data) => {
                    setWord(data.value)
                    if (status === SUCCESS) setStatus(OUTDATED)
                }}
                action={{
                    content: "Generar",
                    onClick: () => {
                        setStatus(PENDING)
                        getRhyme(word).then(
                            res => {
                                setStatus(SUCCESS)
                                setRhyme(res.data)
                            }
                        ).catch(
                            error => {
                                setStatus(FAILURE)
                                setError(error.message)
                            }
                        )
                    }
                }}
            />
            <StatusText status={status} text={rhyme} error={error} />
        </Container>
    )
}

export default Home