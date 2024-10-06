import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import Gadget from "../domain/Gadget";
import Book from "../domain/Book";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("testing .add() method - only one product", () => {
  const cart = new Cart();
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225);
  cart.add(book);
  cart.add(book);
  cart.add(book);
  expect(cart.items.length).toBe(1);
});

test("testing .add() method - a lot of products", () => {
  const cart = new Cart();
  const laptop = new Gadget(100, "Lenovo IdeaPad", 70000);
  cart.add(laptop);
  cart.add(laptop);
  cart.add(laptop);
  expect(cart.items.length).toBe(3);
});

test("testing removeItemById() method", () => {
  const cart = new Cart();
  const book1 = new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225);
  const book2 = new Book(1002, "1984", "George Orwell", 350, 196);
  cart.add(book1);
  cart.add(book2);
  cart.removeItemById(1002);
  expect(cart.items.length).toBe(1);
});

test("testing removeItemById() method with the id that does not exist", () => {
  const cart = new Cart();
  const book1 = new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225);
  const book2 = new Book(1002, "1984", "George Orwell", 350, 196);
  cart.add(book1);
  cart.add(book2);
  cart.removeItemById(1003);
  expect(cart.items.length).toBe(2);
});

test("testing .getTotalCost() method", () => {
  const cart = new Cart();
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225);
  const laptop = new Gadget(100, "Lenovo IdeaPad", 70000);
  cart.add(book);
  cart.add(laptop);
  cart.add(laptop);
  cart.add(laptop);
  expect(cart.getTotalCost()).toBe(212000);
});

test("testing .getTotalCostWithDiscount() method", () => {
  const cart = new Cart();
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225);
  const laptop = new Gadget(100, "Lenovo IdeaPad", 70000);
  cart.add(book);
  cart.add(laptop);
  cart.add(laptop);
  cart.add(laptop);
  expect(cart.getTotalCostWithDiscount(10)).toBe(190800);
});

describe("Cart reduceQuantity testing", () => {
  let cart: Cart;
  let laptop: Gadget;
  let book: Book;

  beforeEach(() => {
    cart = new Cart();
    laptop = new Gadget(1, "Lenovo", 70000, 2);
    book = new Book(2, "War and Piece", "Leo Tolstoy", 2000, 1225);
    cart.add(laptop);
    cart.add(book);
  });

  test("testing the possibility to reduce quantity of item when quantity is greater than 1", () => {
    cart.reduceQuantity(1);
    expect(laptop.quantity).toBe(1);
  });

  test("testing the possobolity to remove item from cart when quantity reaches 0", () => {
    cart.reduceQuantity(1);
    cart.reduceQuantity(1);
    expect(cart.items).not.toContain(laptop);
  });

  test("testing the method when item does not exist", () => {
    const initialItemsCount = cart.items.length;
    cart.reduceQuantity(999);
    expect(cart.items.length).toBe(initialItemsCount);
  });

  test("testing the reduce method on Movie class", () => {
    cart.reduceQuantity(2);
    expect(cart.items).toContain(book);
  });
});
