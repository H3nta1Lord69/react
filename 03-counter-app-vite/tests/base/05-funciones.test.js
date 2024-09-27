import { getUser, getUsuarioActivo } from "../../src/base/05-funciones";

describe("Tests on 05", () => {
  test("getuser returns and object", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUser returns and object", () => {
    const name = "Carl";

    const user = getUsuarioActivo(name);

    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
