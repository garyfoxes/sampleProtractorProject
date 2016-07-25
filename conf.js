exports.config = {
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    },
    baseUrl:'https://angularjs.org',
    framework:'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
  /*  multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }],*/
    specs: ['tests/*.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        stackTrace: false,
        print: function() {}

    }
};