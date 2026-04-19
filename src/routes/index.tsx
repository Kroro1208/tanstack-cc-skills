import { createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import SkillCard from "#/components/SkillCard.tsx";

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

export const Route = createFileRoute("/")({
	component: App,
	pendingComponent: () => <div className="p-14 text-center">Loading...</div>,
	pendingMs: 300,
	loader: async () => {
		const response = await fetch(POKE_API_URL);
		const data = await response.json();

		if(data.results.length === 0 || !data.results) {
			throw notFound();
		}

		return data;
	},
	errorComponent: ({ error }) => {
		const router = useRouter();

		return (
			<div className="p-14">
				<p>エラーが発生しました: {error.message}</p>
				<button className="cursor-pointer" type="button" onClick={() => router.invalidate()}>
					エラーをクリアして再読み込み
				</button>
			</div>
		);
	},
	notFoundComponent: () => <div className="p-14 text-center">Not Found</div>,
});

function App() {
	const data = Route.useLoaderData();
	return (
		<main className="page-wrap px-4 pb-8 pt-14">
			<h1>Hello World</h1>
			<ul className="mt-6 list-none p-0 space-y-5">
				{data.results.map((pokemon: { name: string }) => (
					<li key={pokemon.name}>
						<SkillCard name={pokemon.name} />
					</li>
				))}
			</ul>
		</main>
	);
}
