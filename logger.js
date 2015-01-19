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

    error: function(data){
        this.errorLogger.error(data);
    },

    fatal: function(data){
        this.errorLogger.fatal(data);
    },

    warn: function(data){
        this.errorLogger.warn(data);
    },

    info: function(data){
        this.commonLogger.info(data);
    },

    debug: function(data){
        this.commonLogger.debug(data);
    },

    trace: function(data){
        this.commonLogger.trace(data);
    }
};

var logger = new Logger();

module.exports = logger;