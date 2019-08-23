import React, { useEffect, useState } from "react";
import axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {
	const [locations, setLocations] = useState();

	useEffect(() => {
		axios('https://rickandmortyapi.com/api/location/')
		.then(res => setLocations(res.data.results))
	}, [])

	if(!locations) return <h2>Loading</h2>

	return(
		<section className="character-list grid-view">
			{locations.map(location => {
				return <LocationCard key={Date.now()} location={location} />
			})}
		</section>
	)
}
