import { describe, test, expect } from "vitest";
import { isActivePath } from "../isActivePath.js";

describe("isActivePath", () => {
  // 1.
  test("1. Returns true when current path matches href exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });
});
