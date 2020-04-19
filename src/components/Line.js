import GraphBase from './GraphBase'

class Line extends GraphBase {
    constructor(props) {
        super(props);
    }

    render() {
        const {ctx} = this.context
        if(!ctx){
            return null;
        }
        super.beginRender()

        const { from, to, stroke, shadow } = this.props

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        super.shadow(ctx, shadow)
        ctx.strokeStyle = stroke || 'transparent'
        ctx.stroke()
        super.endRender()

        return null;
    }
}
 
export default Line;