//设计尺寸宽度
const designSize = 64
//设备dpr
const dpr = window.devicePixelRatio || 1

// module.exports = function fontRem(num){
//     console.log(dpr)
// }

const rem = function(num){
    return (num / designSize) + 'rem'
}

const fontRem = function(num){
    return num * dpr + 'px'
}

module.exports = {
    rem,
    fontRem
}