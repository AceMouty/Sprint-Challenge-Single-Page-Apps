import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

function EpisodeCard ({episode}) {
	return(
		<Card>
			<Card.Content>
        <Card.Header>Episode Name: {episode.name}</Card.Header>
        <Card.Meta>Air Date: {episode.air_date}</Card.Meta>
        <Card.Description>
          Episode: {episode.episode}
        </Card.Description>
				<Card.Content extra>
      		<Icon name='user' />Characters: {episode.characters.length}
    		</Card.Content>
      </Card.Content>
		</Card>
	)
}

export default EpisodeCard