import React from 'react';
import './App.scss';
import Nav from './containers/Nav';
import Transaction from './containers/Transaction';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import  configureStore  from './redux/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <main className="container">
          <Switch>
            <Route path="/transaction" component={Transaction} />

          </Switch>
        </main>
      </div>
    </Provider>
  );
}


export default App;
