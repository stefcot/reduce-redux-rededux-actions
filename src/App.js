import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from 'react-redux'
import logo from './logo.svg';
import TodoForm from 'containers/TodoForm';
import TodoList from 'containers/TodoList';
import Message from "containers/Message";
import Footer from "components/Footer";
import Loader from "components/Loader";
import './App.css';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              My own private todo piece of shit
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
              {this.props.isLoading ? (
                <Loader />
              ) : null}
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

export default connect(state => ({isLoading: state.todos.isLoading}))(App)
