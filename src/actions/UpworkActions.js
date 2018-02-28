const PROFILE_URL = 'https://www.upwork.com/api/profiles/v1/providers/~01ffdcc3a73ddc8d3c.json'

// var UpworkApi = require('upwork-api')

export default {

getUpworkProfile() {
  var headers = new Headers();

  // headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  // headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
  // headers.append('Access-Control-Allow-Methods', 'GET');
  // headers.append('Access-Control-Allow-Credentials', 'true');
  // headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  var myInit = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
  }
  return fetch(PROFILE_URL, myInit)
}
}