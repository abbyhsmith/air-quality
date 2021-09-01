import React from 'react'
import './styles.scss'

const DataTable = ({airQualityData}) => {
	const timestamp = airQualityData.current.pollution.ts

	const formatTimestamp = (timestamp) => {
		const options = {year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric"}
		return new Date(timestamp).toLocaleDateString(undefined, options)
	}

	return (
		<table className="pollutionDataTable">
			<thead>
				<tr>
					<td className="aqiTableHeader">
						Air Quality Index
					</td>
					<td className="mainPollutantTableHeader">
						Main Pollutant
					</td>
					<td className="timestampTableHeader">
						Timestamp
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						{airQualityData.current.pollution.aqius}
						<div className="qualityName">
							{airQualityData.current.pollution.aqius < 50 ? <span className="aqiLabel good">Good</span> : ""}
							{airQualityData.current.pollution.aqius < 101 && airQualityData.current.pollution.aqius > 50 ? <span className="aqiLabel moderate">Moderate</span> : ""}
							{airQualityData.current.pollution.aqius < 151 && airQualityData.current.pollution.aqius > 100 ? <span className="aqiLabel unhealthyForSensitiveGroups">Unhealthy for <br />
							Sensitive Groups</span> : ""}
							{airQualityData.current.pollution.aqius < 201 && airQualityData.current.pollution.aqius > 150 ? <span className="aqiLabel unhealthy">Unhealthy</span> : ""}
							{airQualityData.current.pollution.aqius < 301 && airQualityData.current.pollution.aqius > 200 ? <span className="aqiLabel veryUnhealthy">Very Unhealthy</span> : ""}
							{airQualityData.current.pollution.aqius > 300 ? <span className="aqiLabel hazardous">Hazardous</span> : ""}
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
