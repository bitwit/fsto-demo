#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fstoDemo = require('./');

var cli = meow({
  help: [
    'Usage',
    '  fsto-demo <input>',
    '',
    'Example',
    '  fsto-demo Unicorn'
  ].join('\n')
});

fstoDemo(cli.input[0]);
