/**
 * @flow
 * @relayHash 80a30a61bfc46fa2a8a42abcd0ede4ec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ViewAllQueryVariables = {||};
export type ViewAllQueryResponse = {|
  +OpenMics: ?$ReadOnlyArray<?{|
    +id: string,
    +location: ?string,
    +description: ?string,
    +phone: ?string,
    +author: ?string,
  |}>
|};
export type ViewAllQuery = {|
  variables: ViewAllQueryVariables,
  response: ViewAllQueryResponse,
|};
*/


/*
query ViewAllQuery {
  OpenMics {
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
    "kind": "LinkedField",
    "alias": null,
    "name": "OpenMics",
    "storageKey": null,
    "args": null,
    "concreteType": "OpenMic",
    "plural": true,
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
    "name": "ViewAllQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ViewAllQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ViewAllQuery",
    "id": null,
    "text": "query ViewAllQuery {\n  OpenMics {\n    id\n    location\n    description\n    phone\n    author\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd283383505bc634b5312202cadec2d4f';
module.exports = node;
