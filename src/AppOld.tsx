import { useState, useEffect, useReducer } from "react";
import "./App.css";

const API_URL =
	"https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";

const getRandomNumberFromApi = async (): Promise<number> => {
	const res = await fetch(API_URL);
	const numberString = await res.text();

	/* throw new Error("Aiuda!!!"); */

	return +numberString;
};

function App() {
	const [randomNumber, setRandomNumber] = useState<number>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>();
	const [state, dispatch] = useReducer((x) => x + 1, 0);

	useEffect(() => {
		setIsLoading(true);
		getRandomNumberFromApi()
			.then(setRandomNumber)
			.catch((error) => setError(error.message));
	}, [state]);

	useEffect(() => {
		if (randomNumber) {
			setIsLoading(false);
		}
	}, [randomNumber]);

	useEffect(() => {
		if (error) {
			setIsLoading(false);
		}
	}, [error]);

	return (
		<div className="App">
			{isLoading ? (
				<h2>Cargando...</h2>
			) : (
				<h2>Número aleatorio: {randomNumber}</h2>
			)}

			{!isLoading && error && <h2>{error}</h2>}

			<button disabled={isLoading} onClick={dispatch}>
				{isLoading ? "..." : "Nuevo número"}
			</button>
		</div>
	);
}

export default App;
