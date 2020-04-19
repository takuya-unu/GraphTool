
import GraphBase from './GraphBase'

class Rect extends GraphBase {
    constructor(props) {
        super(props);
    }

    render() {
        const { ctx } = this.context
        if(!ctx) return null
        super.beginRender()

        const { x, y, width, height, stroke, fill, shadow } = this.props

        super.shadow(ctx, shadow)

        if(stroke){
            ctx.strokeStyle = stroke
            ctx.strokeRect(x, y, width, height)
        }

        if(fill){
            ctx.fillStyle = fill
            ctx.fillRect(x, y, width, height)
        }

        super.endRender()

        return null;
    }
}
 
export default Rect;