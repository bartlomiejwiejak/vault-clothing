import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './views/Home';
import Shop from './views/Shop';
import Header from './layout/Header';
import Auth from './views/Auth';
import { checkUserSession } from '../redux/user/actions';
import { selectCurrentUser } from '../redux/user/selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './views/Checkout';

function App({ currentUser, checkUserSession }) {

  // useEffect(() => {
  //   unsubscribeFromAuth.current = auth.onAuthStateChanged(async user => {
  //     if (user) {
  //       const userRef = await createUserProfile(user)
  //       userRef.onSnapshot(snapshot => {
  //         setCurrentUser({
  //           id: snapshot.id,
  //           ...snapshot.data()
  //         })
  //       })
  //     }
  //     setCurrentUser(user)
  //   })
  //   return unsubscribeFromAuth.current
  // }, [setCurrentUser])

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

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
    checkUserSession: () => dispatch(checkUserSession())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);