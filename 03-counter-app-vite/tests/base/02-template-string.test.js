import { getSaludo } from "../../src/base/02-template-string";

describe("Test template string", () => {
  test("should return a greet", () => {
    const name = "Carl";
    const msg = getSaludo(name);

    expect(msg).toBe(`Hola ${name}`);
  });
});
