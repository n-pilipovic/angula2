/**
 * Created by novica on 6.12.15..
 */

var express = require('express');

var server = express();

server.use(express.static(__dirname)).listen(9000, function() {
    console.log('server listening on port: ' + 9000);
});
