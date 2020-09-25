import React from 'react';
import Home from "./Home";
import {Switch, Route} from "react-router-dom";
import GameList from "./GameList";
import MovieGame from "./MovieGame";


const Main = () => {
    return (
        <div className = "main">
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game-list">
            <GameList />
          </Route>
          <Route exact path="/game-clips">
            <MovieGame />
          </Route>
        </Switch>
            
        </div>
    );
};

export default Main;