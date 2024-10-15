import Buyable from "./buyable";

export default class Cart{
    public items: Buyable[] = [];

    add (item: Buyable) {
        this.items.push(item)
    }

    get items1(): Buyable[]{
        return [...this.items]
    }

}
