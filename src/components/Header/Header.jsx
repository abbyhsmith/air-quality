import React from 'react'
import Cloud from '../SVG/Cloud.js'
import './styles.scss'

const Header = () => {
	return (
		<div className="header">
			<div className="cloud cloudOne">
				<Cloud />
			</div>
			<h1>Air Quality Data</h1>
			<div className="cloud cloudTwo">
				<Cloud />
			</div>
			<div className="cloud cloudThree">
				<Cloud />
			</div>
			<div className="cloud cloudFour">
				<Cloud />
			</div>
		</div>
	)
}

export default Header
