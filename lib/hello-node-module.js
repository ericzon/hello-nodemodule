var relatedFuncions = require('./more-functions.js');


exports.displayMessage = function (){
    return "Hello "+relatedFuncions.getEndingMsg();
};

exports.getString = function (){
	return "This is a string.";
};

exports.getInteger = function (){
	return 4444;
};

