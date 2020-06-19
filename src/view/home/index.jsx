import React, { Component } from 'react'
import Nav from './nav'
import { Statistic } from 'semantic-ui-react'
import Gallery from './gallery'
export default class index extends Component {
    render() {
        return (
            <div className="home">
                <Nav></Nav>
                <div className='gallery-title'>
                    <Statistic label='Landscape(pic)' value='30' />
                </div>
                <Gallery></Gallery>
            </div>
        )
    }
}
