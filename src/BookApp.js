import React, { Component } from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import UserRow from "./UserRow";
import BookIndex from "./BookIndex";
import Comments from "./Comments";
import { QueryRenderer } from "react-relay";

import Environment from "./Environment.js";

class BookApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search_text: '',
      search_temp: '',
      reflush_rand: 0,

      bookPageMax: 100,
      bookPageSize: 5,
      bookPageNo: 0,
      bookPageNoTemp: 0,

      books: [],
      bookShowId: null,

      commentPageMax: 100,
      commentPageSize: 5,
      commentPageNo: 0,
      commentPageNoTemp: 0,
    };

    this.showBookForm = this.showBookForm.bind(this);
    this.changeBookForm = this.changeBookForm.bind(this);
    // this.createBook = this.createBook.bind(this);
    // this.updateBook = this.updateBook.bind(this);
    this.submitBook = this.submitBook.bind(this);

    this.changeSearchBookText = this.changeSearchBookText.bind(this);
    this.searchBook = this.searchBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.updateBookPage = this.updateBookPage.bind(this);
    this.handleJumpToBookPage = this.handleJumpToBookPage.bind(this);

    this.showComments = this.showComments.bind(this);
    this.createComment = this.createComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);

    this.changeCommentPage = this.changeCommentPage.bind(this);
    this.jumpToCommentPage = this.jumpToCommentPage.bind(this);

    this.reflushRand = this.reflushRand.bind(this);
  }
  reflushRand() {
    this.setState({
      reflush_rand: Math.random()
    });
    console.info('success reflush page');
  }

  changeCommentPage(page) {
    console.info(page)
    if (page.no != undefined) {
      this.setState({
        commentPageNoTemp: page.no
      });
    } else if (page.change != undefined) {
      this.setState({
        commentPageNo: page.change,
        commentPageNoTemp: page.change
      });
    } else if (page.size != undefined) {
      this.setState(state => ({
        commentPageSize: page.size,
        commentPageNo: Math.floor(state.commentPageNo * state.commentPageSize / page.size),
        commentPageNoTemp: Math.floor(state.commentPageNo * state.commentPageSize / page.size)
      }))
    } else if (page.direct >= 0) {
      this.setState({
        commentPageNo: page.direct,
        commentPageNoTemp: page.direct
      });
    }
  }
  jumpToCommentPage() {
    this.setState(state => ({
      commentPageNo: state.commentPageNoTemp
    }));
  }

  showBookForm() {
    if (this.state.book.hidden) {
      this.setState({
        book: {
          hidden: false,
          id: null,
          name: '',
          author: '',
          price: ''
        }
      });
    } else {
      this.setState({hidden: true});
    }
  }
  changeBookForm() {}
  submitBook() {}

  changeSearchBookText(value) {
    this.setState({
      search_temp: value
    });
  }
  searchBook(event) {
    this.setState(state => ({
      search_text: state.search_temp
    }));
  }
  deleteBook(book_id) {
    this.reflushRand();
    console.info('delete success, ' + book_id);
  }
  updateBookPage(page) {
    if (page.no >= 0) {
      this.setState({
        bookPageNoTemp: page.no
      });
    } else if (page.change) {
      this.setState(state => {
        const newPage = state.bookPageNo + page.change;
        if (newPage >= 0 && state.bookPageMax > newPage) {
          return ({
            bookPageNo: newPage,
            bookPageNoTemp: newPage
          });
        }
        return ({});
      });
    } else if (page.size) {
      this.setState(state => ({
        bookPageSize: page.size,
        bookPageNo: Math.floor(state.bookPageNo * state.bookPageSize / page.size),
        bookPageNoTemp: Math.floor(state.bookPageNo * state.bookPageSize / page.size)
      }))
    } else if (page.direct >= 0) {
      this.setState({
        bookPageNo: page.direct,
        bookPageNoTemp: page.direct
      });
    }
  }
  handleJumpToBookPage(event) {
    const newPage = this.state.bookPageNoTemp;
    const pageMax = this.state.bookPageMax;
    if (newPage != "" && newPage >= 0 && newPage < pageMax) {
      console.info('jump');
      this.setState(state => ({
        bookPageNo: state.bookPageNoTemp
      }));
    }
  }

  showComments(bookId) {
    if (bookId == this.state.bookShowId) return;

    this.setState({
      bookShowId: parseInt(bookId),
      commentPageNo: 0,
      commentPageNoTemp: 0
    });
  }
  createComment() {}
  deleteComment() {}

  render() {
    const book = this.state.bookForm;
    const state = this.state;

    return (
      <div className="BookApp">
        <div className="BookApp-intro">
          <QueryRenderer
            environment={Environment}
            variables={{
              searchText: state.search_text,
              reflushRand: state.reflush_rand,
              bookPageSize: state.bookPageSize,
              bookPageNo: state.bookPageNo,
              bookId: state.bookShowId,
              commentPageSize: state.commentPageSize,
              commentPageNo: state.commentPageNo,
            }}
            query={graphql`
              query BookAppQuery(
                $searchText: String,
                $bookPageSize: Int,
                $bookPageNo: Int,
                $bookId: ID,
                $commentPageSize: Int,
                $commentPageNo: Int
              ) {
                books(name: $searchText, pageSize: $bookPageSize, pageNo: $bookPageNo) {
                  id
                  name
                  author
                  price
                  createdAt
                  updatedAt
                  commentsCount
                  comments (bookId: $bookId, pageSize: $commentPageSize, pageNo: $commentPageNo) {
                    id
                    user
                    content
                  }
                }
              }
            `}
            render={({ props, error }) => {
              if (error) return "error";
              if (!props) return "loading";

              return (
                <BookIndex
                  books={props.books}
                  bookShowId={this.state.bookShowId}
                  value={this.state.search_temp}
                  pageSize={this.state.bookPageSize}
                  pageNo={this.state.bookPageNo}
                  pageNoTemp={this.state.bookPageNoTemp}
                  pageMax={this.state.bookPageMax}
                  onChange={this.changeSearchBookText}
                  onDeleteBook={this.deleteBook}
                  onChangePage={this.updateBookPage}
                  onJumpToBookPage={this.handleJumpToBookPage}
                  showComments={this.showComments}
                  onSubmit={this.searchBook}

                  commentPageSize={this.state.commentPageSize}
                  commentPageNo={this.state.commentPageNo}
                  commentPageNoTemp={this.state.commentPageNoTemp}
                  onChangeCommentPage={this.changeCommentPage}
                  onJumpToCommentPage={this.jumpToCommentPage}
                  onCreateComment={this.reflushRand}
                />
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default BookApp;
