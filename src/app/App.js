import React, { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('../common/containers/DefaultLayout'));
// const DefaultLayout = React.lazy(() => import('../containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('../common/views/Pages/Login'));
const Register = React.lazy(() => import('../common/views/Pages/Register'));
const Page404 = React.lazy(() => import('../common/views/Pages/Page404'));
const Page500 = React.lazy(() => import('../common/views/Pages/Page500'));

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
          <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default App;
