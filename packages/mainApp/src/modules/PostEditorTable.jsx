import React from "react"
import PropTypes from "prop-types";
import { PostsManger } from "~/modules/fetch/api"
import { TableEditor } from "~/components/table-editor"
import {
	TABLE_CELL_ROLE_DATE,
	TABLE_CELL_ROLE_ID,
	TABLE_CELL_ROLE_INPUT,
} from "~/components/table-editor/TableAliases"

PostEditorTable.propTypes = {
	posts: PostsManger.postsType,
	editPost: PropTypes.func,
}

const idWidth = { maxWidth: '5rem' }

export function PostEditorTable({ posts }) {

	const eventsMiddleware = {
		onStableStateChange(tableData) {
			console.log(tableData)
		},
		onSave: (data) => {
			PostsManger.editOne(data).then(r => alert('Saved!'))
			return data
		},
		onDelete: (ID) => {
			PostsManger.deleteOneByID(ID).then(r => alert('DELETED!'))
			return ID
		},
		onSaveNewRow: (data) => {
			PostsManger.createOne(data).then(r => alert('Saved!'))
			return data
		},
		onRowCreate: () => [{
			id: Math.random().toString(36).substring(7),
			date: new Date(),
		}, true],
	}
	return (
		<TableEditor
			data={posts}
			schema={{
				eventsMiddleware,
				body: [
					{ header: '#', styles: idWidth, key: 'id', role: TABLE_CELL_ROLE_ID, formater: (id) => idFormater(id) },
					{ header: 'Date', key: 'date', role: TABLE_CELL_ROLE_DATE, formater: (date) => dateFormater(date) },
					{ header: 'Author', key: 'author', role: TABLE_CELL_ROLE_INPUT },
					{ header: 'Title', key: 'title', role: TABLE_CELL_ROLE_INPUT },
				],
			}}/>
	)
}

function dateFormater(date) {
	if (date) {
		return new Intl.DateTimeFormat('ru', {
			year: 'numeric', month: 'numeric', day: 'numeric',
			hour: 'numeric', minute: 'numeric',
			hour12: false
		})
			.format(Date.parse(date))
	} else {
		return 'No Date detected'
	}

}

function idFormater(id) {
	return id.length > 6 ? '...' + id.slice(id.length - 6) : id
}
