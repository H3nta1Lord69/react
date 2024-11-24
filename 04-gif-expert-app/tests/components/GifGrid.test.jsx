import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Tests on <GidGrid />", () => {
  const category = "One Punch";

  test("should shown the loading", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });
});
