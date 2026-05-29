import type { Component } from 'solid-js';
import { Route, Router } from '@solidjs/router';
import PageLayout from './pages/PageLayout';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import TransactionPage from './pages/TransactionPage';
import DashboardPage from './pages/DashboardPage';
import InternalServcerErrorPage from './pages/InternalServcerErrorPage';
import NotfoundPage from './pages/NotfoundPage';

const App: Component = () => {
  return (
    <Router>
      <Route path={"/"} component={PageLayout} >

        {/* dashboard */}
        <Route path={"/dashboard"}>
          <Route path={"/"} component={DashboardPage} />
        </Route>

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

      {/* internal server error */}
      <Route path={"/500"} component={InternalServcerErrorPage} />

      {/* page not found */}
      <Route path={"*"} component={NotfoundPage} />
    </Router >
  );
};

export default App;
