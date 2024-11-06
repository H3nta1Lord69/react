import { getGif } from "../../src/helpers/getGif";

describe("getGifs tests", () => {
  test("should return an array of Gif", async () => {
    const gif = await getGif("One Piece");
    expect(gif.length).toBeGreaterThan(0);
    expect(gif[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
