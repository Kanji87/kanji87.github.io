module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        sass:{
            dist:{
                files:{
                    'build/css/main.css':'source/css/main.scss'
                }
            }
        },
        autoprefixer:{
            options:{
                browsers:['last 2 version', 'ie 9', 'ie 8']
            },
            css:{
                src:'build/css/main.css'
            }
        },
        includereplace:{
            dist:{
                options:{
                    includesDir:'source/includes/',
                    // globals:{
                    //     titlePoly:'Политех'
                    // }
                },
                files:[
                    {src:'*.html', dest:'build/', expand:true, cwd:'source'}
                ]
            }
        },
        // concat:{
        //     options:{
        //         encoding:'utf-8'
        //     },
            // js:{
            //     options:{
            //         separator:';'
            //     },
            //     src:['source/js/vendor/jquery.min.js', 'source/js/vendor/jquery.touchSwipe.min.js', 'source/js/vendor/jquery.magnific-popup.min.js', 'source/js/vendor/social-likes.min.js', 'source/js/vendor/kalendae.standalone.js', 'source/js/vendor/fotorama.js', 'source/js/vendor/sly.min.js', 'source/js/vendor/jquery.nicescroll.min.js', 'source/js/vendor/jquery.fitvids.js', 'source/js/plugins.js', 'source/js/main.js'],
            //     dest:'build/js/main.js'
            // },
        //     css:{
        //         src:['source/css/vendor/ios7-style-font-icons.min.css', 'source/css/vendor/magnific-popup.css', 'source/css/vendor/kalendae.css', 'source/css/vendor/fotorama.css', 'build/css/main.css'],
        //         dest:'build/css/main.css'
        //     }
        // },
        copy:{
            all:{
                files:[
                    {expand:true, cwd:'source', src:['img/**', 'fonts/**', 'js/**'], dest:'build/'}
                    // {expand:true, cwd:'source', src:['js/vendor/modernizr.min.js'], dest:'build/'}
                ]
            },
        },
        watch:{
            options:{
                livereload:true,
            },
            css:{
                files:['source/css/**'],
                tasks:['sass', 'autoprefixer']
            },
            // js:{
            //     files:['source/js/**'],
            //     tasks:['concat:js']
            // },
            copy:{
                files:['*.*', 'img/**', 'fonts/**', 'js/**'],
                tasks:['copy']
            },
        },
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['watch']);
    //grunt.registerTask('font', ['webfont']);
    grunt.registerTask('build', ['sass', 'autoprefixer', 'copy', 'includereplace']);

};