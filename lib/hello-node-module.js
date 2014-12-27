var relatedFuncions = require('./more-functions.js');

function DisplayMessage(){
    return "Hello "+relatedFuncions.getEndingMsg();
}

module.exports.DisplayMessage = DisplayMessage;
