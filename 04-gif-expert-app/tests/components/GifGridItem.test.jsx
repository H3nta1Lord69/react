import { GifGridItem } from "../../src/components/GifGridItem";

describe("Tests on GifGridItem", () => {
  const title = "One Piece";
  const url = "https://www.google.com";
  test("should match with snapshot", () => {
    const {container} = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot(); 
  });
});
