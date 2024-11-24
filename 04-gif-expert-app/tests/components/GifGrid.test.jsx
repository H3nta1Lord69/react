import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock("../../src/hooks/useFetchGif");

describe("Tests on <GidGrid />", () => {
  const category = "One Punch";

  test("should shown the loading", () => {
    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test(`should show items when they're loaded`, () => {
    const gif = [
      {
        id: "ABC",
        title: "Dragon",
        url: "https://localhost/dragon.jpg",
      },
      {
        id: "123",
        title: "One Piece",
        url: "https://localhost/one-piece.jpg",
      },
    ];

    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
