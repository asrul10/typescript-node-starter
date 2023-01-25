import { expect, test } from "vitest";
import { add } from "../add";

test("add", () => {
  expect(add(5, 2)).toBe(7);
});
