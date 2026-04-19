import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main>
			<aside>
				<p>Sidebar</p>
			</aside>
			<section>Section</section>
		</main>
	);
}
