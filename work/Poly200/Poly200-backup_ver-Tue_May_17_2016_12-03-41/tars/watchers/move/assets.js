'use strict';

/**
 * Watcher for images in assets dir of modules
 */
module.exports = function () {
    return tars.packages.chokidar.watch('markup/modules/**/assets/*.*', {
        ignored: '',
        persistent: true,
        ignoreInitial: true
    }).on('all', function (event, path) {
        tars.helpers.watcherLog(event, path);
        tars.packages.gulp.start('other:move-assets');
    });
};
