#!/usr/bin/env node --harmony
var prefix = require('../');

var desiredPrefixes = process.argv.splice(2);

if (desiredPrefixes.length === 0) {
  printUsage();
} else {
  fetchAndPrint();
}

function fetchAndPrint() {
  prefix(desiredPrefixes).then(results => {
    var prefixes = Object.keys(results);

    if (prefixes.length === 1) {
      console.log(results[prefixes[0]]);
    } else {
      printAllPrefixes(results, prefixes);
    }
  });
}

function printAllPrefixes(results, indicies) {
  for (var index of indicies) {
    console.log(`${index}: ${results[index]}`);
  }
}

function printUsage() {
  var script = process.argv[1];
  console.log(`Usage:
  ${script} PREFIX [PREFIX [PREFIX [...]]]

Pass one or more RDF prefixes you want to resolve.
They will be obtained from http://prefix.cc/`);

  process.exit(-1);
}
