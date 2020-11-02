import React from 'react';
import style from './App.module.css';
import Header from './c1-header/Header';
import Weather from './c2-weather/Weather';
import {Route, Switch} from 'react-router-dom';
import History from './c3- history/History';

function App() {

  const check = function () {
    const theTime = new Date();
    const theHour = theTime.getHours();

    if (theHour > 6 && theHour < 12) {
      return style.morning
    } else if (theHour > 12 && theHour < 18) {
      return style.day
    } else if (theHour > 18 && theHour < 24) {
      return style.evening
    } else if (theHour < 6) {
      return style.night
    }
  }

  setInterval(check, 30000);

  return (
    <div className={check()}>
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
