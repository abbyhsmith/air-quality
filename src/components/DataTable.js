import React from 'react'

const DataTable = ({airQualityData}) => {
	const timestamp = airQualityData.current.pollution.ts

	const formatTimestamp = (timestamp) => {
		const options = {year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric"}
		return new Date(timestamp).toLocaleDateString(undefined, options)
	}

	return (
		<table className="data">
			<thead>
				<tr>
					<td>
						Air Quality Index
					</td>
					<td>
						Main Pollutant
					</td>
					<td>
						Timestamp
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						{airQualityData.current.pollution.aqius}
						<div>
							{airQualityData.current.pollution.aqius < 50 ? "Good" : ""}
							{airQualityData.current.pollution.aqius < 101 && airQualityData.current.pollution.aqius > 50 ? "Moderate" : ""}
							{airQualityData.current.pollution.aqius < 151 && airQualityData.current.pollution.aqius > 100 ? "Unhealthy for Sensitive Groups" : ""}
							{airQualityData.current.pollution.aqius < 201 && airQualityData.current.pollution.aqius > 150 ? "Unhealthy" : ""}
							{airQualityData.current.pollution.aqius < 301 && airQualityData.current.pollution.aqius > 200 ? "Very Unhealthy" : ""}
							{airQualityData.current.pollution.aqius > 300 ? "Hazardous" : ""}
						</div>
					</td>
					<td>
						{airQualityData.current.pollution.mainus}
					</td>
					<td>
						{formatTimestamp(timestamp)}
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default DataTable
