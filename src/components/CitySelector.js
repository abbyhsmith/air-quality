import React, {useState} from 'react'
import DataTable from './DataTable.js'

const CitySelector = ({state}) => {
	const [cities, setCities] = useState([])
	const [city, setCity] = useState('')
	const [airQualityData, setAirQualityData] = useState({})

	const getCities = ({state}) => {
		fetch(
			`http://api.airvisual.com/v2/cities?state=${{state}}&country=USA&key=6d4b01b3-7932-4277-81ac-6513625a72de`
		)
			.then((response) => {
				return response.json()
			})
			.then((citiesData) => {
				setCities(citiesData.results)
			})
	}

	getCities()

	const getAirQualityData = (res) => {
		setCity(res)
		fetch(`http://api.airvisual.com/v2/state?&city=${city}&state=${{state}}&country=USA&key=6d4b01b3-7932-4277-81ac-6513625a72de`)
			.then((response) => {
				if (response) {
					return response.json()
				}
			})
			.then(airQualityResponse => {
				setAirQualityData(airQualityResponse.results)
			})
			.catch(error => {
				console.error('Error fetching data')
			})
	}

	console.log(airQualityData)

	return (
		<div className="citySelect">
			<select id="city" className="city" onClick={getAirQualityData}>
				{cities.forEach(city => "<option value={city}>{city}</option>")}
			</select>
			<DataTable airQualityData={airQualityData} />
		</div>
	)
}

export default CitySelector
