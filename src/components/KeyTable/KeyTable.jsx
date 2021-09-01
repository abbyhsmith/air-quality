import React from 'react'
import './styles.scss'

const KeyTable = () => {
	return (
		<table className="keyTable">
			<thead>
				<tr>
					<td colSpan="2">
						Key
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="label">
						Air Quality Index
					</td>
					<td>
						Air Quality Index is a system for measuring concentrations of air pollutants. The index ranges from 0 to 500, with higher values indicating higher concentrations of pollutants. Any value above 300 is considered "hazardous", while anything below 50 is considered "good".
					</td>
				</tr>
				<tr>
					<td className="label">
						Main Pollutant
					</td>
					<td>
						Main Pollutant refers to the pollutant that is currently in the highest concentration in the area.
						<ul>
							<li>
								PM: Particulate matter. The number refers to the diameter of particles in microns. For example, PM2.5 would be particles 2.5 microns or less, and PM10 would be particles 10 microns or less.
							</li>
							<li>
								O3: Ozone
							</li>
							<li>
								NO2: Nitrogen dioxide
							</li>
							<li>
								CO: Carbon monoxide
							</li>
							<li>
								SO2: Sulfur dioxide
							</li>
						</ul>
				</td>
				</tr>
			</tbody>
		</table>
	)
}

export default KeyTable
