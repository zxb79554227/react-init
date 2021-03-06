import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 1, text: 'One', value: 1 },
    { key: 2, text: 'Two', value: 2 },
    { key: 3, text: 'Three', value: 3 },
  ]

export default class dropdown extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <div>
                <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder='Choose an option'
            selection
            value={value}
          />
            </div>
        )
    }
}
