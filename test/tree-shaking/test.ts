import { assertEquals } from "jsr:@std/assert";

import * as tslib from "http://localhost:8080/tslib?exports=__await,__spread";

Deno.test("tree-shaking", () => {
  assertEquals(Object.keys(tslib), ["__await", "__spread"]);
});
