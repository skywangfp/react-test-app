import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
// import { createFragmentContainer, commitMutation } from "react-relay";
import { commitMutation } from "react-relay";

import Environment from "./Environment";
import Pager from "./Common/Pager"
import Comments from "./Comments"

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  handleSubmit(event) {
    this.props.onSubmit(event);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>书名：
          <input value={this.props.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

class BookRow extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.showComments = this.showComments.bind(this);
  }

  handleDelete(event) {
    const bookid = event.target.value;
    const mutation = graphql`
      mutation BookIndexDestroyBookMutation($bookid: ID!) {
        bookDestroy(id: $bookid)
      }
    `;
    const variables = {
      bookid: bookid
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

    this.props.onDelete(bookid);
  }

  showComments(event) {
    this.props.showComments(event.target.value);
  }

  render() {
    const book = this.props.book;
    return (
      <tr key={book.id}>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>
          <button onClick={this.handleDelete} value={book.id} >
            删除
          </button>
          <button onClick={this.showComments} value={book.id} >
            详情
          </button>
        </td>
      </tr>
    );
  }
}

class BookTable extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(bookid) {
    this.props.onDeleteBook(bookid);
  }

  render() {
    const books = (this.props.books || []).map((book) =>
      <BookRow
        key={book.id}
        book={book}
        showComments={this.props.showComments}
        onDelete={this.handleDelete} />
    );
    return (
      <table>
        <thead>
          <tr>
            <th>书名</th>
            <th>作者</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </table>
    );
  }
}


class BookIndex extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.deleteRemoteBook = this.deleteRemoteBook.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  deleteBook(book_id) {
    this.props.onDeleteBook(book_id);
  }

  deleteRemoteBook(book_id) {
    console.info('delete remote book: ' + book_id);
    return true;
  }

  changePage(page) {
    this.props.onChangePage(page);
  }

  render() {
    let book = null;
    let i = 0;
    for (i in this.props.books) {
      const tempBook = this.props.books[i];
      if (tempBook.id == this.props.bookShowId) {
        book = tempBook;
        break;
      }
    }
    return (
      <div>
        <SearchBar value={this.props.value} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <BookTable
          books={this.props.books}
          showComments={this.props.showComments}
          onDeleteBook={this.deleteBook} />
        <Pager
          pageSize={this.props.pageSize}
          pageNo={this.props.pageNo}
          pageNoTemp={this.props.pageNoTemp}
          pageMax={this.props.pageMax}
          onChange={this.changePage}
          onJumpTo={this.props.onJumpToBookPage} />
        <Comments
          book={book}
          pageSize={this.props.commentPageSize}
          pageNo={this.props.commentPageNo}
          pageNoTemp={this.props.commentPageNoTemp}
          onDelete={this.props.onDeleteBook}
          onChangePage={this.props.onChangeCommentPage}
          onJumpToPage={this.props.onJumpToCommentPage}
          onCreateComment={this.props.onCreateComment}
        />
      </div>
    );
  }
}

export default BookIndex;

// export default createFragmentContainer(BookIndex);
