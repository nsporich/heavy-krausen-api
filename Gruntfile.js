module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // configure sass to css magic
    // sass: {
    //     build: {
    //         files: {
    //             'public/src/css/style.css': 'public/src/sass/style.scss'
    //         }
    //     }
    // },

    // configure jshint to validate js files
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: [
        'Gruntfile.js',
        'public/src/js/*.js'
      ]
    },

    // configure concat to consolidate js files
    concat: {
      js: {
        src: [
            //'public/src/js/app.js',  // This specific file
            'public/src/js/lib/*.js' // All JS in the libs folder
        ],
        dest: 'public/dist/js/app.js',
      },
      css: {
        src: [
            'public/src/css/*.css',  // This specific file
            'public/src/css/lib/*.css' // All JS in the libs folder
        ],
        dest: 'public/dist/css/app.css',
      }
    },

    cssmin: {
      build: {
        files: {
          'public/dist/css/app.min.css': 'public/dist/css/app.css'
        }
      }
    },

    // configure uglify to minify js files
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      js: {
        files: {
          'public/dist/js/app.min.js': 'public/dist/js/app.js'
        }
      }
    },

    watch: {
      css: {
        files: ['public/src/css/**/*.css'],
        tasks: ['cssmin']
      },
      js: {
        files: ['public/src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }


  });

  // Default Profile
  grunt.registerTask('default', ['cssmin', 'jshint', 'concat', 'uglify', 'concurrent']);
};
