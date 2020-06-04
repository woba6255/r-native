export async function db(key, data) {
	if (metrics === null) metrics = md

	switch (key) {
		case 'GET_ALL_METRICS': {
			return metrics
		}
		case 'CREATE_METRIC': {
			metrics.push(data)
			return metrics
		}
		case 'DELETE_METRIC_BY_ID': {
			return metrics.splice(metrics.findIndex(e => e.id === data), 1)
		}
		case 'EDIT_METRIC_BY_ID': {
			metrics[metrics.findIndex(e => e.id === data.id)] = data
			return metrics
		}
	}
}

const md = [
	{
		"id": "r3s0r",
		"date": "2020-05-28T10:36:57.753Z",
		"temperature": "123"
	},
	{
		"id": "gdgmj9",
		"date": "2020-05-28T10:47:33.571Z",
		"temperature": "100"
	},
	{
		"id": "ikzhc",
		"date": "2020-05-28T10:47:37.551Z",
		"temperature": "50"
	},
	{
		"id": "rrkh1",
		"date": "2020-05-28T11:55:19.096Z",
		"temperature": "22"
	},
	{
		"id": "bqbx4j",
		"date": "2020-05-28T11:59:10.529Z",
		"temperature": "33"
	},
	{
		"id": "0yrw8",
		"date": "2020-05-28T12:04:43.886Z",
		"temperature": "22"
	},
	{
		"id": "vkaazcf",
		"date": "2020-05-28T14:05:41.030Z",
		"temperature": "-10"
	},
	{
		"id": "x8r35",
		"date": "2020-05-28T14:05:00.000Z",
		"temperature": "30"
	},
	{
		"id": "as5hg",
		"date": "2020-05-28T15:00:42.459Z",
		"temperature": "-20"
	},
	{
		"id": "fcc8c6",
		"date": "2020-05-28T15:08:35.942Z",
		"temperature": "20"
	}
]
let metrics = null
