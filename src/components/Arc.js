import GraphBase from './GraphBase'
import { d2a } from './common/util'

class Arc extends GraphBase {
    constructor(props) {
        super(props);
    }

    render() {
        const { ctx } = this.context
        if(!ctx){
            return null
        }

        super.beginRender()

        const { cx, cy, radius, startAngle, endAngle, shadow, stroke } = this.props

        if(shadow){
            super.shadow(ctx, shadow)
        }

        ctx.arc(cx, cy, radius,d2a(startAngle), d2a(endAngle), false)

        if(stroke){
            ctx.strokeStyle = stroke
        }
        ctx.stroke()
        super.endRender()

        return null;
    }
}
 
export default Arc;