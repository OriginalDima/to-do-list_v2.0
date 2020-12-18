import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSeatch = this.onUpdateSeatch.bind(this);
    }
    onUpdateSeatch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSeatch(term);
    }
    render() {
        return (
            <input
                className='from-control search-input'
                tyle='text'
                placeholder='search by records'
                onChange={this.onUpdateSeatch}
            />
        )
    }
}