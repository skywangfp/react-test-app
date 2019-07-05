/**
 * @flow
 * @relayHash df700a661b62cd698b2e1dd14afcb81f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BookAppQueryVariables = {|
  searchText?: ?string,
  bookPageSize?: ?number,
  bookPageNo?: ?number,
  bookId?: ?string,
  commentPageSize?: ?number,
  commentPageNo?: ?number,
|};
export type BookAppQueryResponse = {|
  +books: $ReadOnlyArray<{|
    +id: string,
    +name: string,
    +author: string,
    +price: number,
    +createdAt: string,
    +updatedAt: string,
    +commentsCount: number,
    +comments: ?$ReadOnlyArray<{|
      +id: string,
      +user: string,
      +content: string,
    |}>,
  |}>
|};
export type BookAppQuery = {|
  variables: BookAppQueryVariables,
  response: BookAppQueryResponse,
|};
*/


/*
query BookAppQuery(
  $searchText: String
  $bookPageSize: Int
  $bookPageNo: Int
  $bookId: ID
  $commentPageSize: Int
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
    comments(bookId: $bookId, pageSize: $commentPageSize, pageNo: $commentPageNo) {
      id
      user
      content
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "searchText",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "bookPageSize",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "bookPageNo",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "bookId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "commentPageSize",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "commentPageNo",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "books",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "searchText",
        "type": "String"
      },
      {
        "kind": "Variable",
        "name": "pageNo",
        "variableName": "bookPageNo",
        "type": "Int"
      },
      {
        "kind": "Variable",
        "name": "pageSize",
        "variableName": "bookPageSize",
        "type": "Int"
      }
    ],
    "concreteType": "Book",
    "plural": true,
    "selections": [
      v1,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "author",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "price",
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "commentsCount",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "comments",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "bookId",
            "variableName": "bookId",
            "type": "ID"
          },
          {
            "kind": "Variable",
            "name": "pageNo",
            "variableName": "commentPageNo",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "pageSize",
            "variableName": "commentPageSize",
            "type": "Int"
          }
        ],
        "concreteType": "Comment",
        "plural": true,
        "selections": [
          v1,
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
            "name": "content",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookAppQuery",
  "id": null,
  "text": "query BookAppQuery(\n  $searchText: String\n  $bookPageSize: Int\n  $bookPageNo: Int\n  $bookId: ID\n  $commentPageSize: Int\n  $commentPageNo: Int\n) {\n  books(name: $searchText, pageSize: $bookPageSize, pageNo: $bookPageNo) {\n    id\n    name\n    author\n    price\n    createdAt\n    updatedAt\n    commentsCount\n    comments(bookId: $bookId, pageSize: $commentPageSize, pageNo: $commentPageNo) {\n      id\n      user\n      content\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookAppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "BookAppQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '88618002c027be326b5640781e09d325';
module.exports = node;
