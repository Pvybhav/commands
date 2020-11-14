import React from 'react';
import './App.css';
import Home from './pages/Home';
import Container from '@material-ui/core/Container';
import { Route, Switch, Redirect } from 'react-router-dom';
import Spinner from './components/loader/Ripple';
const NotFound = React.lazy(() => import('./components/NotFound'));
const Category = React.lazy(() => import('./pages/Category'));

function App() {
  return (
    <div className="App">
      <Container maxWidth={'xl'}>
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/categories" component={Home} />
            <Route exact path="/">
              <Redirect to="/categories" />
            </Route>
            <Route exact path="/category/:category" component={Category} />
            <Route path="/" component={NotFound} />
          </Switch>
        </React.Suspense>
      </Container>
    </div>
  );
}

export default App;
