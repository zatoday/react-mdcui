import React, { Component } from 'react';

export default class base extends Component {
    componentDidMount() {
        this.props.foundation.init();
    }
    componentWillUnmount() {
        this.props.foundation.destroy();
    }
    render() {
        return (
            <div></div>
        );
    }
}
