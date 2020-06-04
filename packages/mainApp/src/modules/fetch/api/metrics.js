import { bridgeDialog } from '~/bridge'


export class MetricsManager {
	static async getAll() {
		// TODO validate
		return await bridgeDialog('GET_ALL_METRICS')
	}

	static async createOne(data) {
		// TODO validate
		return await bridgeDialog('CREATE_METRIC', data)
	}

	static async deleteOneByID(ID) {
		// TODO validate
		return await bridgeDialog('DELETE_METRIC_BY_ID', ID)
	}

	static async editOne(newValue) {
		// TODO validate
		return await bridgeDialog('EDIT_METRIC_BY_ID', newValue)
	}
}
