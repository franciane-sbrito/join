import React, { useEffect, useContext } from 'react'
import Logout from '../../assets/logout.png'
import axios from 'axios'

import { BASE_URL } from '../../constants/urls'
import {
    Header,
    ContainerLogout,
    TitleLogout,
    Title,
    ImageUser,
    ContentPage,
    NameUser,
    Email,
    Address,
    ContainerBio,
    TitleBio,
    Description,
    ContainerData,
    Container,
    Number,
    Name,
    Image,
    Circle,
    ContainerTitle
} from './styled'
import Menu from '../../Components/Menu/Menu'
import HomePreto from '../../assets/home-preto.png'
import RepoCinza from '../../assets/repo-cinza.png'
import SeguidorCinza from '../../assets/seguidor-cinza.png'
import { useHistory, useParams } from 'react-router'
import useProtectedPage from '../Hooks/useProtectedPage'
import { goToLogin } from '../../routes/Coordinator'
import GlobalStateContext from '../../Global/GlobalStateContext'

const UserPage = () => {
    useProtectedPage()
    const history = useHistory()
    const { states, setters, requests } = useContext(GlobalStateContext);
    const params = useParams()
   
    useEffect(() => {
        // if (states.user === "") {
        //     setters.setUser(params.username)
        // }
        getDataUser()
    }, [])

    const logout = () => {
        setters.setUser("")
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        goToLogin(history)
    }

    const getDataUser = () => {
        const user = localStorage.getItem('user')
        axios.get(`${BASE_URL}users/${user}`)
            .then((res) => {
                const token = localStorage.getItem('token')
                if (!token) {
                    goToLogin(history)
                }
                setters.setDataUser(res.data)
            })
            .catch((err) => {
                // alert('Ocorreu um erro tente novamente')
            })
    }

    return (
        <div>
            <Header>
                <Title>#{states.dataUser.login}</Title>
                <ContainerLogout onClick={logout}>
                    <TitleLogout>Sair</TitleLogout>
                    <Image src={Logout} alt='sair' />
                </ContainerLogout>
            </Header>

            <ImageUser src={states.dataUser.avatar_url} alt="Imagem usuario" />

            <ContentPage>
                <ContainerTitle>
                    <Circle />
                    <NameUser>{states.dataUser.name}</NameUser>
                </ContainerTitle>

                <Email>{states.dataUser.email}</Email>
                <Address>{states.dataUser.location}</Address>
            </ContentPage>

            <ContainerData>
                <Container>
                    <Number>{states.dataUser.followers}</Number>
                    <Name>Seguidores</Name>
                </Container>

                <Container>
                    <Number>{states.dataUser.following}</Number>
                    <Name>Seguindo</Name>
                </Container>

                <Container>
                    <Number>{states.dataUser.public_repos}</Number>
                    <Name>Repos</Name>
                </Container>
            </ContainerData>

            <ContainerBio>
                <ContainerTitle>
                    <Circle />
                    <TitleBio>Bio</TitleBio>
                </ContainerTitle>
                <Description>{states.dataUser.bio}</Description>
            </ContainerBio>
            <Menu
                home={HomePreto}
                repos={RepoCinza}
                followers={SeguidorCinza}
                following={SeguidorCinza}
                username={states.user}
            />
        </div>
    )
}

export default UserPage