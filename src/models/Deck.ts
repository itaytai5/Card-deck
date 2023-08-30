import { Card } from "./Card";
import type { Rank, Suit } from "./types";

export class Deck {
  suits: Suit[];
  ranks: Rank[];
  cards: Card[];

  constructor() {
    this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    this.ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    this.cards = [];
    this.initializeDeck();
    this.shuffle();
  }

  private initializeDeck() {
    this.suits.forEach((suit) => {
      this.ranks.forEach((rank) => {
        const card = new Card(suit, rank);
        this.cards.push(card);
      });
    });
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  drawCard() {
    const cardToDraw = this.cards.pop();
    if (!cardToDraw) {
      throw new Error("The deck is empty. no cards left to draw");
    }
    return cardToDraw;
  }

  getTopCard() {
    if (this.cards.length === 0) {
      throw new Error("The deck is empty. No cards left to get.");
    }
    return this.cards[this.cards.length - 1];
  }

  getRemainingCards() {
    return this.cards.length;
  }

  resetDeck() {
    this.cards = [];
    this.initializeDeck();
    this.shuffle();
  }

  addCardByPosition(
    card: Card,
    position: "top" | "bottom" | "middle" | "random"
  ) {}

  dealHand(numberofCard: number) {}

  countCardsBySuit(suit: Suit) {}

  countCardsByRank(suit: Rank) {}
}
