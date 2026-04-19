import { createFileRoute } from "@tanstack/react-router";
import SkillCard from "#/components/SkillCard.tsx";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="page-wrap px-4 pb-8 pt-14">
			<h1>Hello World</h1>
			<ul className="mt-6 list-none p-0 space-y-5">
				<li>
					<SkillCard name="Tanstack Start" />
				</li>
				<li>
					<SkillCard name="Typescript" />
				</li>
				<li>
					<SkillCard name="React" />
				</li>
				<li>
					<SkillCard name="SQL" />
				</li>
			</ul>
		</main>
	);
}
