import { Component } from 'react';

class Path extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.children;
    }
}
 
export default Path;