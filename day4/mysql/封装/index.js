const {find} = require('./db')
let result = find('students', {
    id: 1
});
console.log(result);