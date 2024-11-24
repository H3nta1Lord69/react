import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe("Tests on hook useFetchGif", () => {
  test("should return an initial state", () => {
    // useFetchGif();
    const { result } = renderHook(() => useFetchGif("One Piece"));
    const { images, isLoading } = result;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return an array of images and isLoading = false", async () => {
    // useFetchGif();
    const { result } = renderHook(() => useFetchGif("One Piece"));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 1000,
      }
    );
    const { images, isLoading } = result;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
