import GraphBase from './GraphBase'

class Text extends GraphBase {
    constructor(props) {
        super(props);
    }

    render() {
        const { ctx } = this.context
        if(!ctx) return null
        super.beginRender()

        const {text, x, y ,sizex ,sizey} = this.props
        ctx.font='normal normal 30px/30px san-serif';

        ctx.fillText(text,x, y)
        

        super.endRender()

        return null;
    }
}
 
export default Text;