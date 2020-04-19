
import GraphBase from './GraphBase'

class Clear extends GraphBase {
    constructor(props) {
        super(props);
    }

    render() {
        const { ctx } = this.context
        if(!ctx) return null
        super.beginRender()

        const { x, y, width, height, stroke, fill, shadow } = this.props

        super.shadow(ctx, shadow)

            ctx.clearRect(x, y, width, height)
        

        super.endRender()

        return null;
    }
}
 
export default Clear;