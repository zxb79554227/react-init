import React from 'react'
import { Container,Grid,Image } from 'semantic-ui-react'

export default function gallery() {
    return (
        <Container>
            <Grid padded={false}>
                <Grid.Column computer={4} tablet={3} mobile={3}>
                <Image src={require('../../photos/landscape/1.jpg')}  />
                </Grid.Column>
                <Grid.Column computer={4} tablet={3} mobile={3}>
                <Image src={require('../../photos/landscape/1.jpg')}  />
                </Grid.Column>
                <Grid.Column computer={4} tablet={3} mobile={3}>
                123
                </Grid.Column>
                <Grid.Column computer={4} tablet={3} mobile={3}>
                123
                </Grid.Column>
            </Grid>
        </Container>
    )
}
