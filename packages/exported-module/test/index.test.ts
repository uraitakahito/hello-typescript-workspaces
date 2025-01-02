import test from "node:test";
import assert from "node:assert";

import {hello} from "../index.js";

test("Success test", async (t) => {
  assert.strictEqual(hello, "Hello, ES Module!");
});
