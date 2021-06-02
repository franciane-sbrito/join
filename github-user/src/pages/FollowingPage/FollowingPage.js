import React, { useContext, useEffect } from 'react'
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


const FollowingPage = () => {
    useProtectedPage()
    const { states, setters } = useContext(GlobalStateContext);
    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        getDataFollowing()
    }, [])

    const getDataFollowing = () => {
        const user = localStorage.getItem('user')
        axios.get(`${BASE_URL}users/${user}/following`)
            .then((res) => {
                setters.setFollowing(res.data)
            })
            .catch((err) => {
                // alert('Ocorreu um erro tente novamente')
            })
    }

    return (
        <div>
            <Header >
                <ArrowBackIcon fontSize={'large'} onClick={() => { gotoBack(history) }} />
                <Title>{states.dataUser.following} seguindo</Title>
            </Header>

            <section>
                {states.following.map((follow) => {
                    return (
                        <CardFollower key={follow.id}
                            image={follow.avatar_url}
                            name={follow.login}
                        />
                    )
                })}
            </section>

            <Menu
                home={HomeCinza}
                repos={RepoCinza}
                followers={SeguidorCinza}
                following={SeguidorPreto}
                username={states.user}
            />
        </div>
    )
}

export default FollowingPage