// React
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Root } from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.user.id },
      entities: {
        users: { [window.user.id]: window.user }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

