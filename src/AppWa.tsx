import "./App.css";

import { useState, useEffect } from "react";

const API_URL =
	"https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";

function AppWa() {
	const [randomNumber, setRandomNumber] = useState<number>();

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.text())
			.then((data) => setRandomNumber(+data));
	}, []);

	return (
		<div className="App">
			<h2>Número aleatorio Wa: {randomNumber || "Loading..."}</h2>
		</div>
	);
}

export default AppWa;
