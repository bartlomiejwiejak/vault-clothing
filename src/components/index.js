import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './layout/Header';
import { checkUserSession } from '../redux/user/actions';
import { selectCurrentUser } from '../redux/user/selectors';
import { createStructuredSelector } from 'reselect';
import Basket from './layout/Basket';
import Overlay from './layout/Overlay';

const Shop = lazy(() => import('./views/Shop'));
const Home = lazy(() => import('./views/Home'));
const Auth = lazy(() => import('./views/Auth'));
const Checkout = lazy(() => import('./views/Checkout'))

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
    <>
      <Header />
      <Overlay />
      <Route path='/shop' component={Basket} />
      <Switch>
        <Suspense fallback={null}>
          <div className="content">
            <Route path='/' exact component={Home} />
            <Route path='/shop' component={Shop} />
            <Route path='/auth' exact render={() => currentUser ? <Redirect to='/' /> : <Auth />} />
            <Route path='/checkout' exact component={Checkout} />
          </div>
        </Suspense>
      </Switch>

    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);