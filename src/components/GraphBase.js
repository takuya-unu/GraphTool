import { Component } from 'react';
import PropTypes from 'prop-types';

class GraphBase extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    static contextTypes = {
        ctx: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number,
    }
    
    shadow(ctx, shadow = {}) {
        ctx.shadowColor = shadow.color || ''
        ctx.shadowBlur = shadow.blur ? shadow.blur : 0
        ctx.shadowOffsetX = shadow.offsetX ? shadow.offsetX : 0
        ctx.shadowOffsetY = shadow.offsetY ? shadow.offsetY : 0
    }

    render() { 
        return null;
    }

    beginRender() {
        const { ctx } = this.context

        ctx.save()
        ctx.beginPath()
    }
    
    endRender() {
        const { ctx } = this.context

        ctx.closePath()
        ctx.restore()
    }
}
 
export default GraphBase;