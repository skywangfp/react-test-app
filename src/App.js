import React, { Component } from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import UserRow from "./UserRow";
import BookIndex from "./BookIndex";
import { QueryRenderer } from "react-relay";

import Environment from "./Environment.js";

class App extends Component {
  render() {
    const book_name='2';
    return (
      <div className="App">
        <div className="App-intro">
          <QueryRenderer
            environment={Environment}
            query={graphql`
              query AppQuery {
                users(first: 3) {
                  id
                  ...UserRow_user
                }
                books(name: "$book_name") {
                  id
                  name
                  price
                }
              }
            `}
            render={({ props, error }) => {
              if (error) {
                return "error";
              }
              if (props) {
                console.info(props);
                return props.users.map(user => (
                  <div key={user.id}>
                    <UserRow user={user} />
                  </div>
                ));

                return (
                  <BookIndex books={props.books} />
                );
              }
              return "loading";
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
