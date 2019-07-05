/**
 * @flow
 * @relayHash 5ccf2de441d7eed93d98bb3439941e4b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CommentNewCreateCommentMutationVariables = {|
  bookId: string,
  user: string,
  content: string,
|};
export type CommentNewCreateCommentMutationResponse = {|
  +comment: {|
    +id: string,
    +content: string,
    +user: string,
    +createdAt: string,
    +updatedAt: string,
  |}
|};
export type CommentNewCreateCommentMutation = {|
  variables: CommentNewCreateCommentMutationVariables,
  response: CommentNewCreateCommentMutationResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bookId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "user",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "content",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "comment",
    "name": "commentCreate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "bookId",
        "variableName": "bookId",
        "type": "ID!"
      },
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "user",
        "type": "String!"
      }
    ],
    "concreteType": "Comment",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "user",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "createdAt",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "updatedAt",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CommentNewCreateCommentMutation",
  "id": null,
  "text": "mutation CommentNewCreateCommentMutation(\n  $bookId: ID!\n  $user: String!\n  $content: String!\n) {\n  comment: commentCreate(bookId: $bookId, user: $user, content: $content) {\n    id\n    content\n    user\n    createdAt\n    updatedAt\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CommentNewCreateCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CommentNewCreateCommentMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ecc6a489a01bb8005a517d3f137f65dc';
module.exports = node;
