import React from 'react';
import apiConfig from './apiKeys';
import Search from './SearchComponent';
import Info from './InfoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  render() {

    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.owmKey}`;
    console.log(weatherURL);

    return (
      <div>
        <h1>Hello World!</h1>
        <Switch>
            <Route path='/search' component={Search} />
            <Route exact path='/info' component={() => <Info />} />
            <Redirect to="/search" />
         </Switch>
      </div>
    )
  }
}

export default Main;