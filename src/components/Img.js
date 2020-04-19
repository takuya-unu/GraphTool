import GraphBase from './GraphBase'
import { preFilter } from './common/util'

class Img extends GraphBase {
    constructor(props) {
        super(props);
    }

    imageFilter(filter) {
        const { ctx, width:w, height: h } = this.context
        let imageData

        if(typeof filter === 'string') {
            if(preFilter[filter]) {
                imageData = preFilter[filter](ctx.getImageData(0, 0, w, h), w, h)
                ctx.putImageData(imageData, 0, 0)
            }

        }
        else if(typeof filter == 'function') {
            imageData = filter(ctx.getImageData(0, 0, w, h), w, h)
            ctx.putImageData(imageData, 0, 0)
        }
    }

    render() {
        const { ctx, width, height } = this.context
        if(!ctx){
            return null
        }
        const { src, stretch = 'none', filter = '' } = this.props

        let oImg = new Image()
        oImg.src = src
        oImg.onload = function() {
            const sWidth = oImg.width
            const sHeight = oImg.height

            switch(stretch){
                case 'fill':
                    // (img,sx,sy,swidth,sheight,x,y,width,height);
                    ctx.drawImage(oImg, 0, 0, sWidth, sHeight, 0, 0, width, height)
                    break

                case 'none':
                default:
                    //(img,x,y);
                    ctx.drawImage(oImg, 0, 0)
                    break
            }

            filter && this.imageFilter(filter)
        }.bind(this)

        return null;
    }
}

export default Img;