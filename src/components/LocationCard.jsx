import React from "react";
import { Card, Icon } from 'semantic-ui-react'

export default function LocationCard({ location }) {
  return(
		<Card>
    <Card.Content header={location.name} />
    <Card.Content description={location.type + ": " + location.dimension} />
    <Card.Content extra>
      <Icon name='user' />Residents: {location.residents.length}
    </Card.Content>
  </Card>
	)
}
