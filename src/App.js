import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavBar from './components/common/navBar';
import './App.css';
import Movie from './components/movie';
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <main className="container">
            <Switch>
              <Route path="/movies" component={Movie} />
              <Route path="/movies/:id" component={NotFound} />
              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <Route path="/" component={NotFound} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
