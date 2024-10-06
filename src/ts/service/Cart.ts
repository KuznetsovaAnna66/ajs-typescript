import Buyable from "../domain/Buyable";
import Gadget from "../domain/Gadget";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    if (item.constructor.name !== "Gadget") {
      if (this._items.some((element) => element.id === item.id)) {
        return;
      }
    }
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  // Функция для подсчета общей стоимости без скидки
  getTotalCost(): number {
    return this._items.reduce((total, item) => total + item.price, 0);
  }

  // Функция для подсчета общей стоимости с учетом скидки
  getTotalCostWithDiscount(discount: number): number {
    const totalCost = this.getTotalCost();
    return Math.round(totalCost - totalCost * (discount / 100));
  }

  // Функция для удаления объекта по полю id
  removeItemById(id: number): void {
    const indexToRemove = this._items.findIndex((item) => item.id === id);
    if (indexToRemove !== -1) {
      this._items.splice(indexToRemove, 1);
    }
  }

  reduceQuantity(id: number): void {
    const existingItem = this._items.find((item) => item.id === id);

    if (existingItem) {
      // Если количество товара можно уменьшить
      if (existingItem && existingItem instanceof Gadget) {
        if (existingItem.quantity > 1) {
          // Уменьшаем количество
          existingItem.quantity--;
        } else {
          // Если количество стало 0, удаляем товар из корзины
          this.removeItemById(id);
        }
      }
    }
  }
}
