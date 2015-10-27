module.exports = function(grunt) {

	grunt.initConfig({
	  replace: {
	      dist: {
	        options: {
	          patterns: [
	            {
	              match: "http://khs-minithon.github.io/website/",
	              replacement: 'http://localhost:9001/'
	            }
	          ]
	        },
	        files: [
	          {expand: true, flatten: true, src: ['test/spec.js'], dest: 'test/'}
	        ]
	      }
	    },


	  connect: {
	    server: {
	      options: {
	        port: 9001
	      }
	    }
	  },

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
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('local-test', 'Start Server for Test', function() {
		
	  grunt.task.run('change');
	  grunt.task.run('test');

	  grunt.task.run('connect:server:keepalive');

	});


	//grunt.registerTask('local-test', ['replace', 'connect:server:keepalive']);
	grunt.registerTask('test', 'casperjs');
	grunt.registerTask('change', ['replace']);
	// grunt.registerTask('default', 'connect:server:keepalive');

};

