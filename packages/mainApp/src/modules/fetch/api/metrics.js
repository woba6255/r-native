import { bridge } from '~/modules/fetch'


export class MetricsManager {
	static async getAll() {
		// TODO validate
		return await bridge('GET_ALL_METRICS')
	}

	static async createOne(data) {
		// TODO validate
		return await bridge('CREATE_METRIC', data)
	}

	static async deleteOneByID(ID) {
		// TODO validate
		return await bridge('DELETE_METRIC_BY_ID', ID)
	}

	static async editOne(newValue) {
		// TODO validate
		return await bridge('EDIT_METRIC_BY_ID', newValue)
	}
}
