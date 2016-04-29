# prefix.cc client

[![Build Status](https://travis-ci.org/eddieantonio/prefix.cc-client.svg?branch=master)](https://travis-ci.org/eddieantonio/prefix-cc)
[![npm Version](https://img.shields.io/npm/v/prefix-cc.svg)](https://www.npmjs.com/package/prefix-cc)

JavaScript and command line client to <http://prefix.cc>.

## Install (Command Line)

    npm install -g prefix-cc

## Usage (Command Line)

### Looking up one prefix

```bash
$ prefix-cc dc
http://purl.org/dc/elements/1.1/
```

### Looking up multiple prefixes

```bash
$ prefix-cc dc owl rdf foaf
dc: http://purl.org/dc/elements/1.1/
owl: http://www.w3.org/2002/07/owl#
rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns#
foaf: http://xmlns.com/foaf/0.1/
```

## Usage (JavaScript)

```javascript
import prefix from "prefix-cc";

// Pass each desired prefix an argument.
// prefix() returns a promise.
prefix('rdf', 'foaf', 'owl').then(prefixes => {
   // The promise is resolved with an object mapping each prefix to
   // its URI.

   // prefixes === {
   //  rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
   //  foaf: "http://xmlns.com/foaf/0.1/",
   //  owl: "http://www.w3.org/2002/07/owl#"
   // };

   console.log(prefixes.rdf);
   // prints "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
});
```

# License

Copyright © 2016 Eddie Antonio Santos. MIT Licensed.
