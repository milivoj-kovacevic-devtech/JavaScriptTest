module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'public/bower_components/angular/angular.js',
      'public/app/*.js',
	  'test/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

	reporters : ['dots', 'junit'],
	
    plugins : [
			'karma-phantomjs-launcher',
			'karma-chai',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'karma-jasmine.xml'
    }

  });
};
