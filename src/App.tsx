import { useQuery } from "@tanstack/react-query";
import "./App.css";

const API_URL =
	"https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";

const getRandomNumberFromApi = async (): Promise<number> => {
	const res = await fetch(API_URL);
	const numberString = await res.text();

	//throw new Error("Aiuda!!!");

	return +numberString;
};

function App() {
	const query = useQuery(["randomNumber"], getRandomNumberFromApi);

	return (
		<div className="App">
			{query.isFetching ? (
				<h2>Cargando...</h2>
			) : (
				<h2>Número aleatorio: {query.data}</h2>
			)}

			{!query.isFetching && query.isError && <h2>{`${query.error}`}</h2>}

			<button disabled={query.isFetching} onClick={() => query.refetch()}>
				{query.isFetching ? "..." : "Nuevo número"}
			</button>
		</div>
	);
}

export default App;
