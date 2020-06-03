import {
	TABLE_REDUCER_CREATE_ROW, TABLE_REDUCER_DELETE_CREATE_ROW,
	TABLE_REDUCER_DELETE_ROW,
	TABLE_REDUCER_SAVE_ROW,
	TABLE_REDUCER_UPDATE
} from '../TableAliases'


const defaultValue = {}


const TableReducer = (state, action) => {
	const type = action.type || TABLE_REDUCER_UPDATE
	const payload = action.payload || action
	switch (type) {
		case TABLE_REDUCER_UPDATE: {
			return stableStateChangeEmitter({
				...state,
				...payload
			}, state)
		}
		case TABLE_REDUCER_SAVE_ROW: {
			const {id} = payload
			const data = Object.assign([], state.data)
			const index = data.findIndex((element) => {
				return element.id === id
			})
			data[index] = Object.assign({}, data[index], action.payload)
			return stableStateChangeEmitter({
				...state,
				data: data
			}, state)
		}
		case TABLE_REDUCER_CREATE_ROW: {
			const data = Object.assign([], state.data)
			data.push(payload)
			return {
				...state,
				data: data
			}
		}
		case TABLE_REDUCER_DELETE_ROW: {
			const data = Object.assign([], state.data)
			const index = data.findIndex((element) => {
				return element.id === payload
			})
			data.splice(index, 1)

			return stableStateChangeEmitter({
				...state,
				data: data
			}, state)
		}
		case TABLE_REDUCER_DELETE_CREATE_ROW: {
			const data = Object.assign([], state.data)
			const index = data.findIndex((element) => {
				return element.id === payload
			})
			data.splice(index, 1)

			return {
				...state,
				data: data
			}
		}
		default: {
			return state
		}
	}
}

function stableStateChangeEmitter(toSave, state) {
	if (state.schema && state.schema.eventsMiddleware.onStableStateChange) state.schema.eventsMiddleware.onStableStateChange(toSave.data)
	return toSave
}

export {
	defaultValue,
	TableReducer
}

