import React from 'react'
import { ContainerCard, Image, Title, Circle, ContainerTitle } from './styled'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { goToFollower } from '../../routes/Coordinator'
import { useHistory } from 'react-router'

const CardFollower = (props) => {
    const history = useHistory()

    const saveUser = () => {
        const user = localStorage.setItem('user', props.name)
        goToFollower(history, user)
    }

    return (
        <ContainerCard onClick={saveUser}>
            <ContainerTitle>
                <Circle />
                <Image src={props.image} alt="Imagem seguidor" />
            </ContainerTitle>
            <Title>#{props.name}</Title>
            <ArrowForwardIcon />
        </ContainerCard>
    )
}

export default CardFollower