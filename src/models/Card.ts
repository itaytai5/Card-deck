import type { Rank, Suit } from "./types";

interface CardShape {
  suit: Suit;
  rank: Rank;

  toString(): string;

  getUnicodeCharacter(): string;
}

export class Card implements CardShape {
  suit: Suit;
  rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }

  toString() {
    return "";
  }

  getUnicodeCharacter() {
    return "";
  }
}
