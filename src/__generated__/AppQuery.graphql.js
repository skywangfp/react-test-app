/**
 * @flow
 * @relayHash 87c074d1e6440a80b54607a3297f3f7f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserRow_user$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +users: ?$ReadOnlyArray<{|
    +id: string,
    +$fragmentRefs: UserRow_user$ref,
  |}>,
  +books: $ReadOnlyArray<{|
    +id: string,
    +name: string,
    +price: number,
  |}>,
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  users(first: 3) {
    id
    ...UserRow_user
  }
  books(name: "1") {
    id
    name
    price
  }
}

fragment UserRow_user on User {
  name
  birthday
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3,
    "type": "Int"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "books",
  "storageKey": "books(name:\"1\")",
  "args": [
    {
      "kind": "Literal",
      "name": "name",
      "value": "1",
      "type": "String"
    }
  ],
  "concreteType": "Book",
  "plural": true,
  "selections": [
    v1,
    v2,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "price",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  users(first: 3) {\n    id\n    ...UserRow_user\n  }\n  books(name: \"1\") {\n    id\n    name\n    price\n  }\n}\n\nfragment UserRow_user on User {\n  name\n  birthday\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": "users(first:3)",
        "args": v0,
        "concreteType": "User",
        "plural": true,
        "selections": [
          v1,
          {
            "kind": "FragmentSpread",
            "name": "UserRow_user",
            "args": null
          }
        ]
      },
      v3
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": "users(first:3)",
        "args": v0,
        "concreteType": "User",
        "plural": true,
        "selections": [
          v1,
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "birthday",
            "args": null,
            "storageKey": null
          }
        ]
      },
      v3
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f4e8ba7105ab7b04b1a0664f887f756';
module.exports = node;
