const assert = require("assert");

const dotenvJSON = require("../index");

assert.ok(!process.env.hasOwnProperty("sample"));
assert.ok(!process.env.hasOwnProperty("complex"));

dotenvJSON(); // loads .env.json

assert.ok(process.env.hasOwnProperty("sample"));
assert.equal(process.env.sample, "value1");

assert.ok(process.env.hasOwnProperty("complex"));
assert.equal(process.env.complex, '{"foo":1234}');
