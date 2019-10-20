import React, { Component } from "react";

import Container from "../components/Container";
import API from "../utils/API";





class SaveBook extends Component {
  state = {
      savedBooks: []
  };

  //when this component mounts, grab all books that were save to the database 
  componentDidMount() {
      API.getBooks()
          .then(res => this.setState({ savedBooks: res.data }))
          .catch(err => console.log(err))
  }

  //function to remove book by id
  handleDeleteButton = id => {
      API.deleteBook(id)
          .then(res => this.componentDidMount())
          .catch(err => console.log(err))
  }

  render() {
      return (
          <Container className="container">
              
              <Container>
                  <Container savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
              </Container>
          </Container>
      )
  }
}


export default SaveBook;