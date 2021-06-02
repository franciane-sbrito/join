import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import CardRepos from '../../Components/CardRepos/CardRepos'
import Menu from '../../Components/Menu/Menu'
import HomeCinza from "../../assets/home-cinza.png"
import RepoPreto from "../../assets/repos-preto.png"
import SeguidorCinza from "../../assets/seguidor-cinza.png"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Header, Title } from "./styled"
import { gotoBack } from '../../routes/Coordinator'
import { useHistory, useParams } from 'react-router'
import useProtectedPage from '../Hooks/useProtectedPage'
import { StarRateSharp } from '@material-ui/icons'
import GlobalStateContext from '../../Global/GlobalStateContext'

const RepositoriesPage = () => {
    useProtectedPage()
    const { states, setters, requests } = useContext(GlobalStateContext);

    const history = useHistory()

    const [repos, setRepos] = useState([])
    const params = useParams()


    useEffect(() => {
        getDataRepos()
    }, [])

    const getDataRepos = () => {
        const user = localStorage.getItem('user')
        
        axios.get(`${BASE_URL}users/${user}/repos`)
            .then((res) => {
                setRepos(res.data)
                console.log("Reposta Repositorios", res.data)
            })
            .catch((err) => {
                alert('Ocorreu um erro tente novamente')
            })
    }
   

    const getCardsRepositories = repos.map((repo) => {
        return (
            <CardRepos key={repo.id}
                name={repo.name}
                id={repo.id}
                description={repo.description}
                star={repo.stargazers_count}
            />
        )
    })

    return (
        <div>
            <Header >
                <ArrowBackIcon fontSize={'large'} onClick={() => { gotoBack(history) }}/>
                <Title>{states.dataUser.public_repos} repositórios</Title>
            </Header>

            <div>
                {getCardsRepositories}
            </div>
            <Menu
                home={HomeCinza}
                repos={RepoPreto}
                followers={SeguidorCinza}
                following={SeguidorCinza}
                username={states.user}

            />
        </div>
    )
}

export default RepositoriesPage