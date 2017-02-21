#!/usr/bin/env node

'use strict';

const usage = 'hasbin [--all|--some|--first] cmd [...]';

const argv = require('minimist')(process.argv.slice(2), { boolean: true });

const bins = argv._;
const modes = ['all', 'some', 'first'].filter(mode => argv[mode]);

if (! bins.length || modes.length > 1) {
  console.error(usage);
  process.exit(2);
}

const mode = modes.length ? modes[0] : 'all';

let fn;
let printResult = false;
switch (mode) {
  case 'all': {
    fn = require('hasbin').all.sync;
    break;
  }

  case 'some': {
    fn = require('hasbin').some.sync;
    break;
  }

  case 'first': {
    fn = require('hasbin').first.sync;
    printResult = true;
    break;
  }
}

const result = fn(bins);

if (printResult) {
  console.log(result);
}

if (! result) {
  process.exit(1);
}
