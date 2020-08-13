import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

import AppNavbar from './components/layout/AppNavbar';
import ShoppingList from './components/layout/ShoppingList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AppNavbar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
