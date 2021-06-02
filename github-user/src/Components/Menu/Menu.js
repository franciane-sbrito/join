import React from 'react';
import {
    ContainerMenu,
    Container,
    Image,
    Title
} from './styled'
import { goToFollowers, goToFollowing, goToRepositories, goToUser } from '../../routes/Coordinator';
import { useHistory } from 'react-router';

const Menu = (props) => {

    const history = useHistory()

    return (
    <ContainerMenu> 
        <Container onClick={() => { goToUser(history, props.username) }}>
            <Image src={props.home} alt=""/>
            <Title>Home</Title>
        </Container>

        <Container onClick={() => { goToRepositories(history, props.username) }}>
            <Image src={props.repos} alt=""/>
            <Title>Repos</Title>
        </Container>

        <Container onClick={() => { goToFollowers(history, props.username) }}>
            <Image src={props.followers} alt=""/>
            <Title>Seguidores</Title>
        </Container>

        <Container onClick={() => { goToFollowing(history, props.username) }}>
            <Image src={props.following} alt=""/>
            <Title>Seguindo</Title>
        </Container>
    </ContainerMenu>
    )
}

export default Menu;