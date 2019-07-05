import React, { Component } from "react";
import Environment from "./Environment";
import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";

class CommentNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      content: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const mutation = graphql`
      mutation CommentNewCreateCommentMutation(
        $bookId: ID!
        $user: String!
        $content: String!
      ) {
        comment: commentCreate(bookId: $bookId, user: $user, content: $content) {
          id
          content
          user
          createdAt
          updatedAt
        }
      }
    `;
    const variables = {
      bookId: this.props.bookId,
      user: this.state.user,
      content: this.state.content
    };

    commitMutation(
      Environment,
      {
        mutation,
        variables,
        onCompleted: (response, errors) => {
          console.log('Response received from server.');

          if (this.props.onSubmit && response && response.comment) {
            this.props.onSubmit(response.comment.id);
          }
        },
        onError: err => {
          console.error(err);
        }
      },
    );

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>comment:
          <textarea value={this.props.value} name="content" onChange={this.handleChange} />
        </label>
        <label>user:
          <input value={this.props.value} name="user" onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default CommentNew;
