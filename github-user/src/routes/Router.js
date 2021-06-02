import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import UserPage from '../pages/UserPage/UserPage'
import RepositoriesPage from '../pages/RepositoriesPage/RepositoriesPage'
import FollowersPage from '../pages/FollowersPage/FollowersPage'
import FollowingPage from '../pages/FollowingPage/FollowingPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FollowerPage from '../pages/FollowerPage/FollowerPage'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login'>
                    <LoginPage/>
                </Route>

                <Route exact path='/'>
                    <UserPage/>
                </Route>

                <Route exact path='/repositorios'>
                    <RepositoriesPage/>
                </Route>

                <Route exact path='/seguidores'>
                    <FollowersPage/>
                </Route>

                <Route exact path='/seguindo'>
                    <FollowingPage/>
                </Route>

                <Route exact path='/seguidor/:user'>
                    <FollowerPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>

        </BrowserRouter>
    )
}

export default Router