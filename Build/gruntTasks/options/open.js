module.exports = {
    preProd: {
        path: global.preProdPath.replace(/\//g, "\\")
    },
    prod: {
        path: global.prodPath.replace(/\//g, "\\")
    }
}