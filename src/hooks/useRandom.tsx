import { useQuery } from "@tanstack/react-query";

const API_URL =
	"https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";

const getRandomNumberFromApi = async (): Promise<number> => {
	const res = await fetch(API_URL);
	const numberString = await res.text();

	//throw new Error("Aiuda!!!");

	return +numberString;
};

export default function useRandom() {
	const query = useQuery(["randomNumber"], getRandomNumberFromApi);
	return query;
}
