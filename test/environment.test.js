const assert = require("assert");

const dotenvJSON = require("../index");

assert.ok(!process.env.hasOwnProperty("current_filename"));

dotenvJSON({dir: 'test', env: 'production'}); // loads test/.env.production.json

assert.ok(process.env.hasOwnProperty("current_filename"));
assert.equal(process.env.current_filename, '.env.production.json');
