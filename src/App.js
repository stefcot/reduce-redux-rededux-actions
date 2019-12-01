import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from "./components/Message";
import Footer from "./components/Footer";
import './App.css';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Welcome to the app
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <main className="todo-page">
            <section className="todo-app">
              <Message message={'test of message !!!!'}/>
              <TodoForm />
              <Route
                path="/:filter?"
                render={({match}) => (
                  <TodoList filter={match.params.filter} />
                  )}
              >
              </Route>
            </section>
          </main>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App
