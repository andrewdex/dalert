module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/* DAlert 1.1.0 \n* Author: Dilusha Gonagala \n* License : MIT\n*/\n'
      },
    my_target: {
      files: {
       'min/dalert.jquery.min.js': ['js/dalert.jquery.js']
      }
    }
    },
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};