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
			new Chart(ref.current.getContext('2d'), {
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
		<div style={{margin: '5px 20px 5px 0'}}>
			<canvas id="myChart" ref={ref}/>
		</div>
	)
}
