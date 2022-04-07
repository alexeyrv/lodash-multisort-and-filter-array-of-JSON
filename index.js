// Import stylesheets
import './style.css';

import $ from 'jquery';
import _ from 'lodash';

// Original array
var users = [
  { patron: 'jonny', age: 48, city: 'A' },
  { patron: 'john', age: 34, city: 'A' },
  { patron: 'john', age: 40, city: 'B' },
  { patron: 'jonny', age: 36, city: 'B' },
];

// Use of _.orderBy() method
// Sort by `patron` in ascending order
// and by `age` in descending order

let msort = _.orderBy(users, ['city', 'age', 'city'], ['desc', 'desc', 'desc']);
console.log('Sorted :', msort);

let fltr = _.filter(users, (v, k) => /^.o.n$/.test(v.patron));
// _.filter(users, { patron: 'jonny' }).map((v) => v);

console.log('Filtered :', fltr);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1><div id=main>main<hr/></div>`;

$('#main').append('Original </br>', JSON.stringify(users), '<hr/>');

$('#main').append('Sorted...  </br>', JSON.stringify(msort), '<hr/>');

$('#main').append('... and Filtredl </br>', JSON.stringify(fltr), '<hr/>');
