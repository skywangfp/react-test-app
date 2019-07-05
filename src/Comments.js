import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
// import { createFragmentContainer, commitMutation } from "react-relay";
import { commitMutation } from "react-relay";

// import {fetchQuery} from 'relay-runtime';
import Environment from "./Environment";
import Pager from "./Common/Pager"
import BookEdit from "./BookEdit"
import BookInfo from "./BookInfo"

class CommentRow extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    const commentId = event.target.value;
    const mutation = graphql`
      mutation CommentsDestroyCommentMutation($commentId: ID!) {
        commentDestroy(id: $commentId)
      }
    `;
    const variables = {
      commentId: commentId
    };

    commitMutation(
      Environment,
      {
        mutation,
        variables,
        onCompleted: (response, errors) => {
          console.info(response);
          console.log('Response received from server.');
        },
        onError: err => {
          console.error(err);
        }
      },
    );

    this.props.onDelete(commentId);
  }

  render() {
    const comment = this.props.comment;
    return (
      <tr key={comment.id}>
        <td>{comment.content}</td>
        <td>{comment.user}</td>
        <td>
          <button onClick={this.handleDelete} value={comment.id} >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

class CommentTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const comments = (this.props.comments || []).map((comment) =>
      <CommentRow
        key={comment.id}
        comment={comment}
        onDelete={this.props.onDelete} />
    );
    return (
      <table>
        <thead>
          <tr>
            <th>评论</th>
            <th>用户</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {comments}
        </tbody>
      </table>
    );
  }
}


class Comments extends Component {
  constructor(props) {
    // this.pageMax = Math.ceil(this.props.commentsCount / this.props.pageSize);
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.jumpToPage = this.jumpToPage.bind(this);
  }
  handleChange(page) {
    console.info(page)
    if (page.change) {
      const newPage = this.props.pageNo + page.change;
      const pageMax = Math.ceil(this.props.commentsCount / this.props.pageSize);
      console.info(newPage)
      console.info(pageMax)
      if (newPage >= 0 && pageMax > newPage) {
        console.info(1111)
        this.props.onChangePage({
          change: newPage
        });
      }
    } else {
      this.props.onChangePage(page);
    }
  }
  jumpToPage() {
    const pageMax = Math.ceil(this.props.commentsCount / this.props.pageSize);
    const newPage = this.props.pageNoTemp;
    if (newPage != "" && newPage >= 0 && newPage < pageMax) {
      this.props.onJumpToPage();
    }
  }
  render() {
    const book = this.props.book;
    if (!book) return '';

    if (book.comments && (book.comments.length > 0 || this.props.pageNo > 0)) {
      const pageMax = Math.ceil(book.commentsCount / this.props.pageSize);
      return (
        <div>
          <BookInfo book={this.props.book} onCreateComment={this.props.onCreateComment}/>
          <CommentTable
            book={book}
            comments={book.comments}
            onDelete={this.props.onDelete} />
          <Pager
            pageSize={this.props.pageSize}
            pageNo={this.props.pageNo}
            pageNoTemp={this.props.pageNoTemp}
            pageMax={pageMax}
            onChange={this.handleChange}
            onJumpTo={this.jumpToPage} />
        </div>
      );
    }
    return (<BookInfo book={this.props.book} />);
  }
}

export default Comments;

// export default createFragmentContainer(Comments);
