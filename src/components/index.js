import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './layout/Header';
import { checkUserSession } from '../redux/user/actions';
import Basket from './layout/Basket';
import Overlay from './layout/Overlay';
import useWindowHeight from '../hooks/useWindowHeight';

const Shop = lazy(() => import('./views/Shop'));
const Home = lazy(() => import('./views/Home'));
const Auth = lazy(() => import('./views/Auth'));
const Checkout = lazy(() => import('./views/Checkout'))

function App({ checkUserSession }) {

  useWindowHeight();

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <>
      <Header />
      <Route path='/shop' component={Basket} />
      <Switch>
        <Suspense fallback={null}>
          <div id='content'>
            <Route path='/' exact component={Home} />
            <Route path='/shop' component={Shop} />
            <Route path='/auth' exact component={Auth} />
            <Route path='/checkout' exact component={Checkout} />
          </div>
        </Suspense>
      </Switch>
      <Overlay />
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(null, mapDispatchToProps)(App);