import { metrics } from '../data'


export class MetricsManager {
	static async getAll() {
		// TODO validate
		// TODO re...
		return metrics
	}

	static async createOne(data) {
		// TODO validate
		return metrics.push(data)
	}

	static async deleteOneByID(ID) {
		// TODO validate
		return metrics.splice(metrics.findIndex(e => e.id === ID), 1)
	}

	static async editOne(newValue, ID = newValue.id) {
		// TODO validate
		return metrics[metrics.findIndex(e => e.id === ID)] = newValue
	}
}
