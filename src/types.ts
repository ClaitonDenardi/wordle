import { Dispatch, SetStateAction } from "react";

export interface ContextProps {
	timing: number;
	setTiming: Dispatch<SetStateAction<number>>;
	ingame: boolean;
	setIngame: Dispatch<SetStateAction<boolean>>;
	offline: boolean;
	setOffline: Dispatch<SetStateAction<boolean>>;
}

export type RandomWordApiResponse = {
	word: string;
	wid: number;
	sense: number;
};

export type WordDetailApiResponse = {
	word_id: number;
	xml: string;
};

export type ResultList = {
	word: string;
	hit: boolean;
};