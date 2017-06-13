import React from 'react'
import { Route } from 'react-router'
import App from '../App'
import Message from '../containers/Message'


export default (
  <Route path="/" component={App}>
    <Route path="/:message_title" component={Message} />
  </Route>
);
