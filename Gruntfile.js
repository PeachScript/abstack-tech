module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      options: {
        livereload: 35742
      },
      files: [
        'public/*.js',
        'views/*.pug'
      ],
      css: {
        files: 'public/stylesheets/less/*.less',
        tasks: ['less']
      }
    },
    less: {
      development: {
        options: {
          paths: ['public/stylesheets/less']
        },
        files: {
          'public/stylesheets/abstack.css': 'public/stylesheets/less/abstack.less'
        }
      }
    },
    cssmin: {
      build: {
        files: {
          'public/stylesheets/abstack.min.css': [
            'public/stylesheets/abstack.css'
          ]
        }
      }
    },
    uglify: {
      build: {
        files: {
          'public/javascripts/abstack.min.js': [
            'public/javascripts/abstack.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);

  grunt.registerTask('build', [
    'less',
    'cssmin:build',
    'uglify:build'
  ]);
}
