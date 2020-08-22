var url = "http://mylogger.io/log";

function log (message){
    //sent http request
    console.log(message);
}

module.exports.log=log;