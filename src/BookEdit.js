import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";

import { commitMutation } from "react-relay";

import Environment from "./Environment";

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      author: '',
      price: 0.0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateGQL = this.generateGQL.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert("book form submit");
    event.preventDefault();

    // this.props.onSubmit(event);
  }

  generateGQL() {
    return '';
    // book = this.props.book;
    // if (book.id) {
    //   return (graphql`
    //     mutation{
    //       bookUpdate(id: {book.id}, name: \"{book.name}\", author: \"{book.author}\", price: {book.price}) {
    //         id
    //         name
    //         author
    //         price
    //       }
    //     }
    //   `);
    // } else {
    //   return (graphql`
    //     mutation{
    //       createUpdate(name: \"{book.name}\", author: \"{book.author}\", price: {book.price}) {
    //         id
    //         name
    //         author
    //         price
    //       }
    //     }
    //   `);
    // }
  }

  render() {
    const props = this.props;
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="name" value={props.name} onChange={this.handleChange} />
        <input type="text" name="author" value={props.author} onChange={this.handleChange} />
        <input type="text" name="price" value={props.price} onChange={this.handleChange} />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BookForm;
