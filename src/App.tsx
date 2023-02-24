import "./App.css";
import useRandom from "./hooks/useRandom";

function App() {
	const query = useRandom();

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
