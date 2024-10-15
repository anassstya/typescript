import Cart from "./cart";

const cart = new Cart()
cart.add({
        id: 1,
        name: 'Мстители',
        year: 2012,
        country: 'США',
        slogan: 'Avengers Assemble!',
        genre: 'фантастика, боевик, фэнтези',
        time: '',
    }
)
console.log(cart.items)


