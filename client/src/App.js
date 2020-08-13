import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/layout/AppNavbar';
import ShoppingList from './components/layout/ShoppingList';

const App = () => {
  return (
    <div>
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
