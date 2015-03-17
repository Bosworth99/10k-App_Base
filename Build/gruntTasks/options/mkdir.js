module.exports = {
    createDir: {
        options: {
            create: [global.pkg.localDrive + ':/' + global.pkg.minFolder, global.pkg.janeDrive + ':/' + global.pkg.folder]
        },
    },
    preProdDrop: {
        options: {
            create: [global.preProdPath, global.preProdPath + "/" + global.pkg.folder]
        },
    },

    prodDrop: {
        options: {
            create: [global.prodPath, global.prodPath + "/" + global.pkg.folder]
        },
    }
}