var fs = require('fs');

let readText = {
    read: function (text, cb) {
        fs.readFile(text, { encoding: 'utf-8' }, function (err, data) {
            if (err) {
                cb(err.tostring());
            }
            else {
                cb(data);
            }
        });
    }
};
module.exports = readText