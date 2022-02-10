const moment = require('moment');
const lodash = require('lodash');


// Print Date or Time in the following format:
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

// Check if the following date is valid or not:
console.log(moment('2020-01-01').isValid()) 
console.log(moment('2020-14-01').isValid())

// Manipulating Dates
console.log(moment().add(7, 'days').format())
console.log(moment().add(7, 'months').format())
console.log(moment().add(7, 'years').format())
console.log(moment().subtract(7, 'days').format())
console.log(moment().subtract(7, 'months').format())
console.log(moment().subtract(7, 'years').format())

// Find the difference between the following 2 dates:
console.log(`${(moment('2015-09-11').diff('2014-11-11','days'))} days`)
console.log(`${(moment('2015-09-16').diff('2014-11-27','days'))} days`)

// Check is 2020-01-01 date after 2018-01-01
console.log(moment('2020-01-01').isAfter('2018-01-01'));

// Check is 2010-01-01 date after 2018-01-01
console.log(moment('2010-01-01').isAfter('2018-01-01'));

// Check if the year 2019 is a leap year
console.log(moment('2019').isLeapYear());

// Check if the year 2020 is a leap year
console.log(moment('2020').isLeapYear());


// Array methods

console.log(lodash.flattenDeep([1,5,9,45,[67,33,[89],2],23]))

console.log(lodash.fromPairs([['a', 1], ['b', 2]]));

console.log(lodash.intersection([1,2,3],[2,3,4,5]))

console.log(lodash.union([1,2,3],[2,3,4,5],[5,6,7]))

console.log(lodash.pull([1,5,6,5,2],5))

// Collection methods

console.log(lodash.sample({'a':23,'b':89,'c':78}))

console.log(lodash.shuffle([89,67,52,8,40]));

console.log(lodash.groupBy(['one', 'two', 'three'], 'length'));

console.log(lodash.orderBy({'a':23,'b':89,'c':78}));

console.log(lodash.reject([89,67,52,8,40],n => n > 50 ));