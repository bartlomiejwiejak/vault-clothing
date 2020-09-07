import React, { useEffect, useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Shop from './views/Shop';
import Header from './layout/Header';
import Auth from './views/Auth';
import { auth } from '../firebase/firebaseUtils';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const unsubscribeFromAuth = useRef(null)

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribeFromAuth;
  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/auth' component={Auth} />
      </Switch>
    </div>
  );
}

export default App;