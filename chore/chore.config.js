/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 */
'use strict';
const path = require('path');
module.exports = (function () {

    const projectName = "Css Star Rating";

    const ENV_LOCAL = "local",
        ENV_STAGING = "staging",
        ENV_PRODUCTION = "production",
        ENV_TESTING = "testing";

    const validEnvs = [ENV_LOCAL, ENV_STAGING, ENV_PRODUCTION, ENV_TESTING];

    //dir paths
    const root = './',
        src = 'src',
        dist = 'dist',

        entryFile = 'app.js',
        indexFile = 'index.html',
        app = 'app',
        assets = 'assets';

    const styleguideFolder = 'docs';
    const styleguideCopies = [
        {
            src: [
                path.join( 'src', 'assets', 'star-rating.icons.svg')
            ],
            dest: path.join(styleguideFolder, 'assets', 'images'),
            name: 'styleguide images copies'
        }
    ];

    const config = {
        projectName:projectName,
        root: root,
        src: src,
        dist: dist,

        app: app,
        assets: assets,

        entryFile: entryFile,
        indexFile: indexFile,

        sc5Styleguide:{
            destFolder : styleguideFolder
            , copies : styleguideCopies
        }
    };

    return config;

})();
