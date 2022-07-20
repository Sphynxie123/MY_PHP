const express = require('express');
const app = express();
const os = require('node:os');

app
.get('/cpu', function(req, res) {
    let cpu = {
        model: os.cpus()[0].model,
        cores: os.cpus().length,
    };

    res.send(JSON.stringify(cpu));
})
.get('/ram', function(req, res) {
    let ram = {
        bytes: os.totalmem(),
        GB: os.totalmem() / (1E9),
    };

    res.send(JSON.stringify(ram));
})
.get('/os', function(req, res) {
    let opSys = {
        platform: os.platform(),
        release: os.release(),
    };

    res.send(JSON.stringify(opSys));
});

app.listen(3000, () => console.log('Server at 3000.'));