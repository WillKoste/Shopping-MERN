import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

import AppNavbar from './components/layout/AppNavbar';
import ShoppingList from './components/layout/ShoppingList';
import ItemModal from './components/filler/ItemModal';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <div className="container">
          <ItemModal />
          <ShoppingList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
