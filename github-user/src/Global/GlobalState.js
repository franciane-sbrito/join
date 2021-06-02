import React, { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [erro, setErro] = useState(false)
    const [user, setUser] = useState("")
    const [dataUser, setDataUser] = useState([])
    const [following, setFollowing] = useState([])
    const [followers, setFollowers] = useState([])
    const [userFollower, setUserFollower] = useState("")


    const states = { erro, user, dataUser, following, followers, userFollower }
    const setters = { setErro, setUser, setDataUser, setFollowing, setFollowers, setUserFollower }

    const data =  { states, setters }
   
    return (
        <GlobalStateContext.Provider value={data} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState