var Logger = {
    "LEVEL" : {
        "TRACE" : 0,
        "DEBUG" : 1,
        "INFO" : 2,
        "ERROR" : 3
    },
    "COLORS" : ["black", "green", "blue", "red"],
    "STATUS" : {
        "ERROR" : "ERROR",
        "OK" : "OK"
    }
};

Logger.setLevel = function(level) {
    this.logLevel = level;
}


Logger.trace = function(status, id, message, data) {
    this._printOut(this.LEVEL.TRACE, status, id, message, data);
}


Logger.debug = function(status, id, message, data) {
    this._printOut(this.LEVEL.TRACE, status, id, message, data);
}


Logger.info = function(status, id, message, data) {
    this._printOut(this.LEVEL.TRACE, status, id, message, data);
}


Logger.error = function(status, id, message, data) {
    this._printOut(this.LEVEL.TRACE, status, id, message, data);
}


Logger._printOut = function(level, status, id, message, data) {
    
    if(this.logLevel <= level) {
        var color = this.COLORS[level];
        console.log("%c[ " + id + " ] - " + status, "color:" + color + "; font-weight:bold;");
        console.log("%c" + message, "color:" + color + "; font-weight:bold;");
        if(data != null) {
            try {
                console.log(JSON.parse(JSON.stringify(data)));
            } catch(e) {
                console.log(data);
            }
        }
        console.log("");
    }
    
}

