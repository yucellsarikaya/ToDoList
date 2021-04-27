import List from './List'
import Navi from './Navi'
import AddNot from './AddNot'
import NotFound from './NotFound'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap';
import alertify from 'alertifyjs'
import React, { Component } from 'react'
export default class App extends Component {
  state = { noteList: [] }

  add = (note) => {
    this.setState({ noteList: note });
    console.log("app: " + note);
    console.log("noteList app : " + this.state.noteList);
  }

  removeToDoList = (index) => {
    let array = this.state.noteList;
    delete array[index];
    this.setState({ noteList: array });
    alertify.error("deleted from to-do list", 1.5);
  }

  render() {
    return (
      <div className="App">
        <Navi />
        <Container>
          <Switch>
            <Route exact path="/" render={props => (
              <List
                {...props}
                info={this.state.noteList}
                removeToDoList={this.removeToDoList}
              />
            )} />
            <Route exact path="/addNote" render={props => (
              <AddNot
                {...props}
                noteAdd={this.add}
              />
            )} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    )
  }
}