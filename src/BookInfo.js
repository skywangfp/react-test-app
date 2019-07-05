import React, { Component } from "react";
import CommentNew from "./CommentNew"

class Pager extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const book = this.props.book;
    return (
      <div>
        <p>书名：{book.name}</p>
        <p>作者：{book.author}</p>
        <p>价格：{book.price}</p>
        <p>创建时间：{book.createdAt}</p>
        <p>更新时间：{book.updatedAt}</p>
        <CommentNew bookId={book.id} onSubmit={this.props.onCreateComment}/>
      </div>
    );
  }
}
export default Pager;
