const assert = require("assert");

const dotenvJSON = require("../index");

assert.ok(!process.env.hasOwnProperty("changed_directory"));

dotenvJSON({dir: 'test'}); // loads test/.env.json

assert.ok(process.env.hasOwnProperty("changed_directory"));
assert.equal(process.env.changed_directory, "test_directory");
