import type { Component } from 'solid-js';
import { Route, Router } from '@solidjs/router';
import PageLayout from './pages/PageLayout';
import Product from './pages/Product';

const App: Component = () => {
  return (
    <Router>
      <Route path={"/"} component={PageLayout} >
        <Route path={"/products"} component={Product} />
      </Route>
    </Router >
  );
};

export default App;
