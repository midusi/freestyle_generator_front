import React from 'react'
import { Segment, Loader, Message } from 'semantic-ui-react'

import { PENDING, SUCCESS, FAILURE, OUTDATED } from '../constants/status'

const StatusText = ({status, text, error}) => (
    (status === SUCCESS || status === OUTDATED) ? <Segment>{text}</Segment> :
    (status === PENDING) ? <Loader active>Generando</Loader> :
    (status === FAILURE) ? (
        <Message negative>
            <Message.Header>Error cargando el verso</Message.Header>
            <p>{error}</p>
        </Message>
    ) :
    null
)

export default StatusText