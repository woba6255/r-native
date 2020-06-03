import React from "react"
import { ROUTE_INDEX, ROUTE_METRICS, ROUTE_POST_EDITOR, RenderRoutes } from "modules/router"
import { IndexViewGraphTable } from "views/metrics"
import { NavBar } from "modules/nav-bar/NavBar"
import { PageBasic } from "components/page"


export function routerIndex() {
	return [
		{ path: ROUTE_INDEX, key: "ROOT", exact: true, component: Page },
		{ path: ROUTE_METRICS, key: "GT", component: RenderRoutes, routes: IndexViewGraphTable() },
	]
}

function Page() {
	return (
		<>
			<NavBar />
			<PageBasic>
				<p>Home!!!</p>
			</PageBasic>
		</>
	)
}
