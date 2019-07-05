/**
 * @flow
 * @relayHash 1755c776c1cc2ac9a15c00d1cda8818a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CommentsDestroyCommentMutationVariables = {|
  commentId: string
|};
export type CommentsDestroyCommentMutationResponse = {|
  +commentDestroy: string
|};
export type CommentsDestroyCommentMutation = {|
  variables: CommentsDestroyCommentMutationVariables,
  response: CommentsDestroyCommentMutationResponse,
|};
*/


/*
mutation CommentsDestroyCommentMutation(
  $commentId: ID!
) {
  commentDestroy(id: $commentId)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "commentId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "commentDestroy",
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "commentId",
        "type": "ID!"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CommentsDestroyCommentMutation",
  "id": null,
  "text": "mutation CommentsDestroyCommentMutation(\n  $commentId: ID!\n) {\n  commentDestroy(id: $commentId)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CommentsDestroyCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CommentsDestroyCommentMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'caa84ee7cc4c752b7ee3d3169e3cd24d';
module.exports = node;
