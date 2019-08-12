/**
 * @flow
 * @relayHash a86136874d4ee647cfdd2ead86b82af7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +OpenMics: ?$ReadOnlyArray<?{|
    +id: ?string,
    +location: ?string,
    +description: ?string,
    +phone: ?string,
    +author: ?string,
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
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
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  OpenMics {\n    id\n    location\n    description\n    phone\n    author\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '13931a199f445baac89946705a045d5a';
module.exports = node;
