/**
 * @flow
 * @relayHash 6a0a365e2cc18d0f17cda47f5a74193f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BookIndexDestroyBookMutationVariables = {|
  bookid: string
|};
export type BookIndexDestroyBookMutationResponse = {|
  +bookDestroy: string
|};
export type BookIndexDestroyBookMutation = {|
  variables: BookIndexDestroyBookMutationVariables,
  response: BookIndexDestroyBookMutationResponse,
|};
*/


/*
mutation BookIndexDestroyBookMutation(
  $bookid: ID!
) {
  bookDestroy(id: $bookid)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bookid",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "bookDestroy",
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "bookid",
        "type": "ID!"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "BookIndexDestroyBookMutation",
  "id": null,
  "text": "mutation BookIndexDestroyBookMutation(\n  $bookid: ID!\n) {\n  bookDestroy(id: $bookid)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookIndexDestroyBookMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "BookIndexDestroyBookMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd384725c7ba4976b365ea81e7368adc5';
module.exports = node;
