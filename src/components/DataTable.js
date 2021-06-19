import React from 'react'

const DataTable = ({airQualityData}) => {
	return (
		<table>
			<thead>
				<tr>
					<td>
						Hello
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						{airQualityData}
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default DataTable
