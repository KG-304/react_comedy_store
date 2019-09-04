/**
 * @flow
 * @relayHash c98bbf447ee719cb38753c18676edf72
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MicPageQueryVariables = {|
  id: string
|};
export type MicPageQueryResponse = {|
  +OpenMic: ?{|
    +id: string,
    +location: ?string,
    +description: ?string,
    +phone: ?string,
    +author: ?string,
  |}
|};
export type MicPageQuery = {|
  variables: MicPageQueryVariables,
  response: MicPageQueryResponse,
|};
*/


/*
query MicPageQuery(
  $id: ID!
) {
  OpenMic(id: $id) {
    id
    location
    description
    phone
    author
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "OpenMic",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "OpenMic",
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
        "name": "location",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "phone",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "author",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MicPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MicPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "MicPageQuery",
    "id": null,
    "text": "query MicPageQuery(\n  $id: ID!\n) {\n  OpenMic(id: $id) {\n    id\n    location\n    description\n    phone\n    author\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e48291105cde6be9c12eaee36d2b65fa';
module.exports = node;
