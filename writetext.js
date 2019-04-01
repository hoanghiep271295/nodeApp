var fs = require('fs');
var writeText = {
    startWrite: function (path, data, cb) {
        fs.appendFile(path, data, function (err) {
            if (err) {
                cb(err);
            }
            console.log("Complete write");
        })
    }
};

module.exports = writeText
