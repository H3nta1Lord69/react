describe("Tests on <DemoComponent />", () => {
  test("This is a demo test", () => {
    // AAA
    // 1. Initial state
    const msg1 = `Hello world`;

    // 2. Stimulation
    const msg2 = msg1.trim();

    // 3. Asserts
    expect(msg1).toBe(msg2);
  });
});
