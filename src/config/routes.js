import React from 'react'
import { Route } from 'react-router'
import App from '../App'
import Message from '../containers/MessageContainer'


export default (
  <Route path="/" component={App}>
    <Route path="/:message_id" component={Message} />
  </Route>
);
