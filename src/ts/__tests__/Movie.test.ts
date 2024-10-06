import Movie from "../domain/Movie";

test("testing class Movie", () => {
  const result = new Movie(
    1111,
    "Harry Potter and the Sorcerer's Stone",
    500,
    2001,
    ["UK", "USA"],
    "Путешествие в твою мечту",
    ["фэнтези", "приключения", "семейный"],
    "2 ч 32 мин"
  );

  const expected = {
    id: 1111,
    name: "Harry Potter and the Sorcerer's Stone",
    price: 500,
    year: 2001,
    country: ["UK", "USA"],
    slogan: "Путешествие в твою мечту",
    genre: ["фэнтези", "приключения", "семейный"],
    duration: "2 ч 32 мин",
  };

  expect(result).toEqual(expected);
});
