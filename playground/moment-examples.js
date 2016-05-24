var moment = require('moment');

//print current time
console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1464113693;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format());

// Date and time Long Month name and uppercase AM/PM
console.log('Current date and time', now.format('MMMM Do, YYYY @ h:mmA'))

// Date and time Short Month name and lowercase AM/PM
console.log('Current date and time', now.format('MMM Do, YYYY @ h:mma'))
