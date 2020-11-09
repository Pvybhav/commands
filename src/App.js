import './App.css';
import Home from './pages/Home';
import Container from '@material-ui/core/Container';
import { Route, Switch, Redirect } from 'react-router-dom';
import Category from './pages/Category';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Container maxWidth={'xl'}>
        <Switch>
          <Route exact path="/categories" component={Home} />
          <Route exact path="/">
            <Redirect to="/categories" />
          </Route>
          <Route exact path="/category/:category" component={Category} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
