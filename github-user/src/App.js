import React from 'react';
import Router from './routes/Router';
import Menu from './Components/Menu/Menu';
import CardRepositories from './Components/CardRepos/CardRepos';
import CardFollower from './Components/CardFollower/CardFollower';
import GlobalState from './Global/GlobalState';

const App = () => {
    return (
        <GlobalState>
            <Router />
        </GlobalState>
    )
}

export default App;