export const d2a = function(d){
    return d*Math.PI/180
}
export const a2d = function(a){
    return a/180*Math.PI
}
export const calcPointOnCircle = function(c, r, angle) {
    let x = c.x + Math.cos(d2a(angle)) * r
    let y = c.y + Math.sin(d2a(angle)) * r
    return {
        x,
        y,
    }
}

export const grayImageFliter = function(imageData, w /*width*/, h /*height*/) {
    let data = imageData.data
    for (let r = 0; r < h; r++) {
        for (let c = 0; c < w; c++) {
            data[(r*w+c)*4+0] = data[(r*w+c)*4+1] = data[(r*w+c)*4+2] =
                (data[(r*w+c)*4+0] + data[(r*w+c)*4+1] + data[(r*w+c)*4+2]) / 3
        }
    }
    return imageData
}

export const yellowImageFilter = function(imageData, w /*width*/, h /*height*/) {
    let data = imageData.data
    for (let r = 0; r < h; r++) {
        for (let c = 0; c < w; c++) {
            data[(r*w+c)*4+2] = 0
        }
    }
    return imageData
}

export const blackWhiteImageFilter = function(imageData, w /*width*/, h /*height*/) {
    let data = imageData.data
    for (let r = 0; r < h; r++) {
        for (let c = 0; c < w; c++) {
            const avg = (data[(r*w+c)*4+0] + data[(r*w+c)*4+1] + data[(r*w+c)*4+2]) / 3
            data[(r*w+c)*4+0] = data[(r*w+c)*4+1] = data[(r*w+c)*4+2] = avg > 150 ? 255 : 0
        }
    }
    return imageData
}

export const preFilter = {
    gray: grayImageFliter,
    yellow: yellowImageFilter,
    blackWhite: blackWhiteImageFilter,
}
