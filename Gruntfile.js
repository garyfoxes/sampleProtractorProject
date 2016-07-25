module.exports = function (grunt) {
    grunt.initConfig({
        protractor: {
            options: {
                configFile: "conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            e2e: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    keepAlive: true
                }
            }
        },
        protractor_webdriver: {
            start: {
                options: {
                    command: 'webdriver-manager start'
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.registerTask('e2e-test', ['protractor_webdriver:start','protractor:e2e']);//run grunt e2e-test to kick off tests

}