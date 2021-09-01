import React, {useState, useEffect} from 'react'
import DataTable from '../DataTable/DataTable.jsx'
import './styles.scss'

const CitySelector = ({state}) => {
	const [cities, setCities] = useState([])
	const [airQualityData, setAirQualityData] = useState({})

	useEffect(() => {
		fetch(
			`https://api.airvisual.com/v2/cities?state=${state}&country=USA&key=6d4b01b3-7932-4277-81ac-6513625a72de`
		)
			.then((response) => {
				return response.json()
			})
			.then((citiesData) => {
				setCities(citiesData.data)
			})
	}, [state])

	const getAirQualityData = (city) => {
		fetch(`https://api.airvisual.com/v2/city?&city=${city}&state=${state}&country=USA&key=6d4b01b3-7932-4277-81ac-6513625a72de`)
			.then((response) => {
				if (response) {
					return response.json()
				}
			})
			.then(airQualityResponse => {
				setAirQualityData(airQualityResponse.data)
			})
			.catch(error => {
				console.error('Error fetching data')
			})
	}

	return (
		<div className="citySelect">
				<div className="citySelector">
				<div>
					<label htmlFor="city">Select a city</label>
				</div>
				<div>
					{Boolean(cities.length > 0) && 
						<select id="city" className="city" onChange={(e) => getAirQualityData(e.target.value)}>
							<option value=""></option>
							{cities.map((city, i) => <option key={`city-option-${i}`} value={city.city}>{city.city}</option>)}
						</select>
					}
				</div>
			</div>
			{airQualityData.current && <DataTable airQualityData={airQualityData} />}
		</div>
	)
}

export default CitySelector
