import React, { useEffect, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './views/Home';
import Shop from './views/Shop';
import Header from './layout/Header';
import Auth from './views/Auth';
import { auth, createUserProfile } from '../firebase/firebaseUtils';
import { setCurrentUser } from '../redux/user/actions';
import { selectCurrentUser } from '../redux/user/selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './views/Checkout';

function App({ setCurrentUser, currentUser }) {
  const unsubscribeFromAuth = useRef(null)

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setCurrentUser(user)
    })
    return () => {
      unsubscribeFromAuth()
    };
  }, [setCurrentUser])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/auth' exact render={() => currentUser ? <Redirect to='/' /> : <Auth />} />
        <Route path='/checkout' exact component={Checkout} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);