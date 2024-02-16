import { useEffect, useState } from "react";
import { RandomWordApiResponse, ResultList, WordDetailApiResponse } from "../types";
import { getRandomWord } from "../utils/getRandomWord";
import { getRandomWordDetail } from "../utils/getRandomWordDetail";

export const useWords = (offline: boolean) => {
	const [word, setWord] = useState<string>("");
	const [result, setResult] = useState<ResultList[]>([]);
	const [detail, setDetail] = useState("");

	const defaultErrorMessage = "Erro ao buscar descrição";

	useEffect(() => {
		if (offline) return setWord(getRandomWord());

		fetch("https://api.dicionario-aberto.net/random")
			.then(res => res.json())
			.then((data: RandomWordApiResponse) => setWord(data.word));

		return () => { [] }
	}, [offline, result]);

	function handleHit(hit: boolean) {
		setResult((prev) => [...prev, { word, hit }]);
		setDetail("");
	}

	const extractDefString = (xml: string) => {
		const regex = /<def>(.*?)<\/def>/gs;
		const matches = regex.exec(xml);

		const detailMessage = matches && matches[1] ? matches[1] : defaultErrorMessage;
		setDetail(detailMessage);
	};

	function handleDetail() {
		if (offline) return setDetail(getRandomWordDetail(word));

		fetch(`https://api.dicionario-aberto.net/word/${word}`)
			.then((res) => {
				if (!res.ok) throw new Error(defaultErrorMessage);
				return res.json();
			})
			.then((data: WordDetailApiResponse[]) => {
				if (!data.length) throw new Error(defaultErrorMessage);
				extractDefString(data[0].xml);
			})
			.catch(() => setDetail(defaultErrorMessage));
	}

	return { word, result, detail, handleHit, handleDetail }
}