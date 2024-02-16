import { useContext } from "react"
import { AppContext } from "../appContext";
import { useTimer } from "../hooks/useTimer";
import { useWords } from "../hooks/useWords";
import Info from "../assets/Info.svg";

function Game() {
	const { setIngame, offline } = useContext(AppContext);

	const { timeRemaining } = useTimer();
	const { word, result, detail, handleHit, handleDetail } = useWords(offline);

	const hits = result?.filter((r) => r.hit);

	const renderDetail = () => {
		if (detail) return (
			<span aria-live="assertive">{detail}</span>
		)

		return (
			<button
				onClick={() => handleDetail()}
				aria-label="Obter descrição da palavra"
			>
				<img src={Info} alt="" aria-hidden />
			</button>
		)
	}

	return (
		<div className="container">
			{timeRemaining > 0 ?
				<>
					<p className="clock">{timeRemaining}</p>
					<p className="word">{word}</p>
					{renderDetail()}
					<section>
						<button onClick={() => handleHit(false)}>Pular</button>
						<button onClick={() => handleHit(true)}>Acerto</button>
					</section>
				</>
				:
				<>
					<p>{`${hits.length} acertos em ${result.length} palavras`}</p>
					<ul>
						{result.map((r) => (
							<li key={r.word} className={r.hit ? "hit" : "miss"}>
								{r.word}
							</li>
						))}
					</ul>
					<button onClick={() => setIngame(false)}>Menu</button>
				</>
			}
		</div>
	)
}

export default Game;
