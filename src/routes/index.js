import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import TodoView              from 'views/TodoView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={TodoView} />
  </Route>
);
