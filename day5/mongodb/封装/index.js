const {
    find,
    ObjectId
} = require('./db');
!(async () => {
    let data = await find('students', {
        _id: ObjectId('5d31289b8567372874877501');
    });
    console.log(data);
})();