var axios = require('axios');

function prefix() {
  if (arguments.length === 0) {
    return Promise.resolve({});
  }

  try {
    var url = argumentsToURL(arguments);
  } catch (err) {
    return Promise.reject(err);
  }

  return axios.get(url)
    .then(response => {
      return Promise.resolve(response.data);
    });
}

function argumentsToURL(prefixes) {
  var list = Array.from(prefixes).join(',');
  return `http://prefix.cc/${list}.file.json`;
}

module.exports = prefix;
