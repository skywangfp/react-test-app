import React, { Component } from "react";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";

class UserRow extends Component {
  render() {
    const user = this.props.user;
    console.info(user);
    return (
      <div>
        #{user.id} {user.name} {user.birthday}
      </div>
    );
  }
}

export default createFragmentContainer(UserRow, {
  user: graphql`
    fragment UserRow_user on User {
      name
      birthday
    }
  `
});
