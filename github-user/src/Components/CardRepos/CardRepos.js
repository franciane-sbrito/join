import React from 'react'
import {
    ContainerRepositories,
    ContainerTitle,
    Circle,
    Title,
    Content,
    Container,
    Number,
    Image,
    ContainerStar,
    StyledStarBorderIcon
} from './styled'
import Cadeado from '../../assets/cadeado.png'

const CardRepositories = (props) => {
    return (
        <ContainerRepositories key={props.id}>
            <ContainerTitle>
                <Circle />
                <Title>{props.name}</Title>
            </ContainerTitle>
            <Content>{props.description}</Content>
            <Container>
                <ContainerStar>
                    <StyledStarBorderIcon fontSize="medium" />
                    <Number>{props.star}</Number>
                </ContainerStar>
                <Image src={Cadeado} alt="Cadeados" />
            </Container>
        </ContainerRepositories>
    )
}

export default CardRepositories