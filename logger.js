'use strict';

var bunyan = require('bunyan');

var Logger = function(){};

Logger.prototype = {

    init: function(data){

        var commonStreams = process.env.TEST_MODE ? [] : [{
            path: data.directory + '/' + data.name + ".log"
        }];

        var errorStreams = process.env.TEST_MODE ? [] : [{
            path: data.directory + '/' + data.name + "-errors.log"
        }];

        this.commonLogger = bunyan.createLogger({
            name: data.name,
            streams: commonStreams
        });

        this.errorLogger  = bunyan.createLogger({
            name: data.name + "-error",
            src:  true,
            streams: errorStreams
        });
    },

    error: function(){
        this.errorLogger.error.apply(this.errorLogger, arguments);
    },

    fatal: function(){
        this.errorLogger.fatal.apply(this.errorLogger, arguments);
    },

    warn: function(){
        this.errorLogger.warn.apply(this.errorLogger, arguments);
    },

    info: function(){
        this.commonLogger.info.apply(this.commonLogger, arguments);
    },

    debug: function(){
        this.commonLogger.debug.apply(this.commonLogger, arguments);
    },

    trace: function(){
        this.commonLogger.trace.apply(this.commonLogger, arguments);
    }
};

var logger = new Logger();

module.exports = logger;
