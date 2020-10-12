import React from 'react';
import style from './App.module.css';
import Header from './c1-header/Header';
import Weather from './c2-weather/Weather';
import {Route, Switch} from 'react-router-dom';
import History from './c3- history/History';

function App() {
  return (
    <div className={style.appWrapper}>
      <Header/>
      <div>
        <Switch>
          <Route exact path='/' render={() => <Weather/>}/>
          <Route path='/history' render={() => <History/>}/>
        </Switch>
      </div>
    </div>)
}

export default App;
