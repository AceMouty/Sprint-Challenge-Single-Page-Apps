import React, {useState, useEffect} from 'react';
import axios from 'axios';

import EpisodeCard from './EpisodeCard';

function EpisodesList () {
	const [episodes, setEpisodes] = useState();

	useEffect(() => {
		axios('https://rickandmortyapi.com/api/episode/')
		.then(res => setEpisodes(res.data.results))
	})

	if(!episodes) return <h2>Loading...</h2>

	return(
		<section className="grid-view">
			{episodes.map(episode => {
				return <EpisodeCard key={episode.id} episode={episode} />
			})}
		</section>
	)
}

export default EpisodesList;