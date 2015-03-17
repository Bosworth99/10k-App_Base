({
    appDir: '../',
    baseUrl: 'Javascript',
    dir: 'F:/SEAP2min',
    modules: [
        { name: 'dashboardController' },
        { name: 'newAccessController' }
    ],
    fileExclusionRegExp: /^(BuildScript|Thumbs.db|App_Code|obj|My\sProject|Web\sReferences|Service\sReferences|preProdVault)$|(.vb|.txt|.scc|Debug.config|Release.config)$|(.vbproj)/,
    optimizeCss: 'standard',
    removeCombined: true,
    skipDirOptimize: true,//************** remove later **************
    paths: {
        "dashboardController": 'controllers/dashboardController',
        "newAccessController": 'controllers/newAccessController',
        "mobileCarousel": "jquery.mobileCarousel",
        "mobileTooltip": "empty:",
        "dialogDatePicker": "empty:",
        "globals": "empty:",
        "cookie": "empty:",
        "formUtil": "empty:",
        "maskedInput": "empty:",
        "placeholder": "empty:",
        "bubbletip": "empty:",
        "jqValidate": "empty:",
        "autoTab": "empty:",
        "SettingsValidation": "empty:",
        "jqplot.core": "empty:",
        "jqplot": "empty:"
    }
})
