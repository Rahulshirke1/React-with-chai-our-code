import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "red"}
    }
    render() {
        return (<h2>I am a {this.props.model} </h2>)
    }
}

export default Car;