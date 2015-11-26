import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import TodoView              from 'views/TodoView';
import TodoItem              from 'components/TodoItem';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={TodoView} />
    <Route path='todo' component={TodoView}>
       {/* render the message component at /todo/111 */}
       <Route path=":id" component={TodoItem} />
    </Route>
  </Route>
);
