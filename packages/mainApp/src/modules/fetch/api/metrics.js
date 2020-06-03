import ftch from "~/modules/fetch"
import { API_URL_ROUTE_METRICS } from "~/modules/fetch/ApiRouts"


export class MetricsManager {
	static async getAll() {
		// TODO validate
		// TODO re...
		return [
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
		//await ftch.GET(API_URL_ROUTE_METRICS)
	}

	static async createOne(data) {
		// TODO validate
		return await ftch.POST(API_URL_ROUTE_METRICS, data)
	}

	static async deleteOneByID(ID) {
		// TODO validate
		return await ftch.DELETE(API_URL_ROUTE_METRICS + '/' + ID)
	}

	static async editOne(newValue, ID = newValue.id) {
		// TODO validate
		return await ftch.PUT(API_URL_ROUTE_METRICS + '/' + ID, newValue)
	}
}
