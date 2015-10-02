module.exports = function(grunt) {
	grunt.initConfig({
	  casperjs: {
	    options: {
	      async: {
	        parallel: false
	      },
	      silent: false
	    },
	    files: ['test/*.js']
	  },
	})

	grunt.loadNpmTasks('grunt-casperjs');

	grunt.registerTask('test', ['casperjs']);

};

