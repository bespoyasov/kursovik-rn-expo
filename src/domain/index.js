import { randomBetween } from "../utils";
import quotes from "./quotes.json";

export function selectRandomQuote() {
  const randomIndex = randomBetween(0, quotes.length - 1);
  return quotes[randomIndex];
}
