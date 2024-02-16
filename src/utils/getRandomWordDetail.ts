import { words } from "./randomWords";

export const getRandomWordDetail = (currentWord: string): string => {
	return words.find((w) => w.word === currentWord)?.detail || "Descrição indisponível";
};