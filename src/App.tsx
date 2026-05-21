import type { Component } from 'solid-js';
import { Route, Router } from '@solidjs/router';
import PageLayout from './pages/PageLayout';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import TransactionPage from './pages/TransactionPage';

const App: Component = () => {
  return (
    <Router>
      <Route path={"/"} component={PageLayout} >

        {/* categories */}
        <Route path={"/categories"}>
          <Route path={"/"} component={CategoryPage} />
          <Route path={"/:id"} component={CategoryDetailPage} />
        </Route>

        {/* product */}
        <Route path={"/products"}>
          <Route path={"/"} component={ProductPage} />
          <Route path={"/:id"} component={ProductDetailPage} />
        </Route>

        {/* transaction */}
        <Route path={"/transactions"}>
          <Route path={"/"} component={TransactionPage} />
        </Route>
      </Route>
    </Router >
  );
};

export default App;
