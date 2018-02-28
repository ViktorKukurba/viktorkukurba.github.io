var ncp = require('ncp').ncp;
var path = require('path');

ncp.limit = 16;

// const publicDist = path.resolve('public/');
const FOLDERS_FILES_TO_COPY = ['data', 'images'];

const errorHandler = function(source) {
  return function (err) {
    if (err) {
      return console.error(err);
    }
    console.log(source + ' copied successfully');
  }
}

FOLDERS_FILES_TO_COPY.forEach(function (f) {
  console.log(path.resolve('public/', f))
  ncp(path.resolve('public/', f), path.resolve('dist/', f), errorHandler(f));
});
