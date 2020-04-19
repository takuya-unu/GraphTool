import PropTypes from 'prop-types';
import GraphBase from './GraphBase'
import {d2a, calcPointOnCircle} from './common/util'

class Pie extends GraphBase {
    constructor(props) {
        super(props);
    }
       
    static contextTypes = {
        ctx: PropTypes.object
    }

    render() {
        const { ctx } = this.context
        if(!ctx){
            return null
        }

        super.beginRender()

        const {
            shadow, stroke, fill,
            angle, radius:r, center:c
        } = this.props

        if(shadow){
            super.shadow(ctx, shadow)
        }
        
        let p = calcPointOnCircle(c, r, angle.start)
        let x = p.x
        let y = p.y

        ctx.moveTo(c.x, c.y)
        ctx.lineTo(x, y)
  
        ctx.arc(c.x, c.y, r, d2a(angle.start), d2a(angle.end), false)
        if(stroke){
            ctx.closePath()
            ctx.strokeStyle = stroke
            ctx.stroke()
        }

        ctx.fillStyle = fill
        ctx.fill()

        super.endRender()

        return null;
    }
}
 
export default Pie;