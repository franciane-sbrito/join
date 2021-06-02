import React, {  useEffect, useContext } from 'react'
import Logo from '../../assets/github-login.png'
import {
    ContainerPage,
    Image,
    Input,
    Button,
    Text,
    TextInput,
    ContainerInput
} from './styled'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router';
import { goToUser } from '../../routes/Coordinator';
import axios from 'axios'
import { BASE_URL } from '../../constants/urls';
import GlobalStateContext from '../../Global/GlobalStateContext';
const LoginPage = () => {

    const history = useHistory()
    const { states, setters } = useContext(GlobalStateContext);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token !== null) {
            goToUser(history)
        }
    }, [history])

    const onChange = (e) => {
        setters.setUser(e.target.value)
        localStorage.setItem('user', e.target.value)
    }

    useEffect(() => {
        getDataUser()
    }, [])

    const getDataUser = () => {
        const user = localStorage.getItem('user')
        axios.get(`${BASE_URL}users/${user}`)
            .then((res) => {
                if (states.user !== "") {
                    localStorage.setItem('token', res.headers.etag)
                    goToUser(history, states.user)
                } else {
                    setters.setErro(true)
                }
            })
            .catch((err) => {
                // alert('Ocorreu um erro tente novamente')
            })
    }

    const onSubmitForm = () => {
        if (states.user !== "") {
            states.user && getDataUser()

        } else {
            setters.setErro(true)
        }
    }

    return (
        <ContainerPage>
            <Image src={Logo} alt="Logo" />
            <ContainerInput>
                <Input
                    placeholder="Usuário"
                    name="user"
                    onChange={onChange} />
                {states.erro ? <TextInput>Campo Obrigatório</TextInput> : <span></span>}

            </ContainerInput>
            <Button type="submit" onClick={() => { onSubmitForm() }}>
                <Text>Entrar</Text>
                <ArrowForwardIcon />
            </Button>
        </ContainerPage>
    )
}

export default LoginPage