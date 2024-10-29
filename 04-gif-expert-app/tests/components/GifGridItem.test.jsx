import { GifGridItem } from "../../src/components/GifGridItem";

// GifGridTest
describe("Tests on GifGridItem", () => {
  const title = "One Piece";
  const url = "https://www.google.com";
  test("should match with snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});

test("should present the image with the URL and ALT", () => {
  render(<GifGridItem title={title} url={url} />);
  // screen.debug();
  // expect(screen.getByRole("img").src).toBe(url);
  // expect(screen.getByRole("img").alt).toBe(title);

  const { src, alt } = screen.getByRole("img");
  expect(src).toBe(url);
  expect(alt).toBe(title);
});
