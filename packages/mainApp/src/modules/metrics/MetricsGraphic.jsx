import React, { createRef, useEffect } from 'react'
import Chart from 'chart.js'


export function MetricsGraphic({metrics}) {
	const ref = createRef()

	useEffect(() => {
		if (metrics.length) {
			const labels = metrics.map((e) =>
				new Intl.DateTimeFormat('ru', {
					year: '2-digit',
					month: 'numeric', day: 'numeric',
					hour: 'numeric', minute: 'numeric',/* second: 'numeric',*/
					hour12: false
				})
					.format(
						Date.parse(e.date)
					)
			)
			const data = metrics.map((e) => e.temperature)
			const chart = new Chart(ref.current.getContext('2d'), {
				type: 'line',
				data: {
					labels: labels,
					datasets: [
						{
							label: 'Temperature',
							data: data
						}
					]
				},
				options: {}
			})
		}
	}, [metrics])


	return (
		<div>
			<canvas id="myChart" ref={ref}/>
		</div>
	)
}
