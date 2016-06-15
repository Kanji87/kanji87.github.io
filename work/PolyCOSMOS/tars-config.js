module.exports = {
    "buildPath": "./builds/",
    "ulimit": 4096,
    "useArchiver": true,
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": ""
        }
    },
    "useImagesForDisplayWithDpi": [
        96,
        192
    ],
    "postcss": [],
    "useBabel": false,
    "css": {
        "workflow": "concat"
    },
    "js": {
        "workflow": "concat",
        "bundler": "webpack",
        "lint": true,
        "useBabel": false,
        "removeConsoleLog": true,
        "webpack": {
            "useHMR": false
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "minifyHtml": false,
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img",
        "componentsFolderName": "modules"
    },
    "notifyConfig": {
        "useNotify": false,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "templater": "jade",
    "useBuildVersioning": true,
    "generateStaticPath": true,
    "cssPreprocessor": "scss"
};