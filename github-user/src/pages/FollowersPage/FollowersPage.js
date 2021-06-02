import React, { useContext, useEffect, useState } from 'react'
import { Header, Title } from "./styled"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { gotoBack } from '../../routes/Coordinator';
import { useHistory, useParams } from 'react-router';
import axios from 'axios'
import { BASE_URL } from '../../constants/urls';
import CardFollower from '../../Components/CardFollower/CardFollower';
import HomeCinza from '../../assets/home-cinza.png'
import RepoCinza from '../../assets/repo-cinza.png'
import SeguidorPreto from '../../assets/seguidor-preto.png'
import SeguidorCinza from '../../assets/seguidor-cinza.png'
import Menu from '../../Components/Menu/Menu'
import useProtectedPage from '../Hooks/useProtectedPage';
import GlobalStateContext from '../../Global/GlobalStateContext';

const FollowersPage = () => {
    useProtectedPage()
    const { states, setters } = useContext(GlobalStateContext);
    const history = useHistory()

    useEffect(() => {
        getDataFollowers()
    }, [])

    const getDataFollowers = () => {
        const user = localStorage.getItem('user')
        axios.get(`${BASE_URL}users/${user}/followers`)
            .then((res) => {
                setters.setFollowers(res.data)
            })
            .catch((err) => {
                alert('Ocorreu um erro tente novamente')
            })
    }

    return (
        <div>
            <Header >
                <ArrowBackIcon fontSize={'large'} onClick={() => { gotoBack(history) }} />
                <Title>{states.dataUser.followers} seguidores</Title>
            </Header>
            <section>
                {states.followers.map((follower) => {
                    return (
                        <CardFollower key={follower.id}
                            image={follower.avatar_url}
                            name={follower.login}
                        />
                    )
                })}
            </section>
            <Menu
                home={HomeCinza}
                repos={RepoCinza}
                followers={SeguidorPreto}
                following={SeguidorCinza}
                username={states.user}
            />
        </div>
    )
}

export default FollowersPage