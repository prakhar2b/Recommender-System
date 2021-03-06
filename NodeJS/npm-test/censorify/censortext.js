var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];

function censor(inStr){
	for(idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx],"***");
	}

	for(idx in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[idx],"***");
	}

	return inStr;
}



function addCensoredWords(word){
	customCensoredWords.push(word);
}

function getCensoredWords(word){
	return censoredWords.concat(customCensoredWords);
}

// exports-- required for Node.js application using this module, to
// have access to the functions.

exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;