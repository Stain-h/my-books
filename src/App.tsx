import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary';
import Home from './pages/Home'
import Signin from './pages/Signin'
import Add from './pages/Add'
import Detail from './pages/Detail'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'
import Error from './pages/Error'


function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/add" component={Add} />
          <Route path="/book/:id" component={Detail} />
          <Route path="/edit/:id" component={Edit} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
