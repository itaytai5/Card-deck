import { Deck } from "./models/Deck";

const deck = new Deck();

console.log(deck.drawCard());
console.log(deck.drawCard());
console.log(deck.drawCard());
console.log(deck.cards.length);
