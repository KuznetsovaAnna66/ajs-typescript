import MusicAlbum from "../domain/MusicAlbum";

test("testing class MusicAlbum", () => {
  const result = new MusicAlbum(80, "Revival", "Eminem", 500);
  const expected = {
    id: 80,
    name: "Revival",
    author: "Eminem",
    price: 500,
  };
  expect(result).toEqual(expected);
});
