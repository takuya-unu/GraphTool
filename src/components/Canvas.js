import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';


class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ctx: null,
            width: 300,
            height: 150,
         }
    }

    static childContextTypes = {
        ctx: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number,
    }

    getChildContext() {
        return {
            ctx: this.state.ctx,
            width: this.state.width,
            height: this.state.height
        }
    }

    render() {
        const { width, height, children } = this.props

        return ( 
            <canvas width={ width } height={ height }>
                { children }
            </canvas>
         );
    }

    componentDidMount() {
        this.setState({
            ctx: ReactDOM.findDOMNode(this).getContext('2d'),
            width: this.props.width || 300,
            height: this.props.height || 150,
        })
    }
}
 
export default Canvas;