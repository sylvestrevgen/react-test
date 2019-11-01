import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styles from './app.module.css';
import AppBar from '../AppBar/AppBar';
import Logo from '../AppBar/Logo/Logo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

// Pages-routes code splitting
const AsyncPostsPage = lazy(() =>
  import(
    '../../pages/PostsPage/PostsPageContainer' /* webpackChunkName: "posts-page" */
  ),
);

const AsyncSinglePostPage = lazy(() =>
  import(
    '../../pages/SinglePostPage/SinglePostPageContainer' /* webpackChunkName: "single-post-page" */
  ),
);

const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <div className={styles.app}>
      <AppBar>
        <Logo />
      </AppBar>

      <ToastContainer />

      <ErrorBoundary>
        <div className={styles.container}>
          <Switch>
            <Route path="/posts/:id" component={AsyncSinglePostPage} />
            <Route path="/posts" component={AsyncPostsPage} />
            <Redirect to="/posts" />
          </Switch>
        </div>
      </ErrorBoundary>
    </div>
  </Suspense>
);

export default App;
