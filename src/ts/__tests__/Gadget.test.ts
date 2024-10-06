import Gadget from "../domain/Gadget";

test("testing class Gadget", () => {
  const result = new Gadget(100, "Lenovo IdeaPad", 70000, 1);
  const expected = {
    id: 100,
    name: "Lenovo IdeaPad",
    price: 70000,
    quantity: 1,
  };
  expect(result).toEqual(expected);
});
