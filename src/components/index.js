import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Shop from './views/Shop';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;