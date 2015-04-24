// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var json;

  // cannot stringify functions
  if (typeof obj === "function") {
  	return '';
  }

  if (typeof obj === "undefined") {
  	return '';
  }

  if (typeof obj === "number") {
  	json = obj.toString();
  	return json;
  }

  if (obj === null) {
  	json = "null";
  	return json;
  }

  if (typeof obj === "boolean") {
  	json = obj.toString();
  	return json;
  }

  if (typeof obj === "string") {
  	json = '"' + obj + '"';
  	return json;
  }

  if (Array.isArray(obj) === true) {
  	var openBracket = '' + '[';
  	var closeBracket = ']' + '';
  	var comma = ',';
  	json = openBracket;
  	for (var i = 0; i < obj.length; i++) {
  		if (i === obj.length - 1) {
  			json += stringifyJSON(obj[i]);
  		} else {
  			json += stringifyJSON(obj[i]) + comma;
  		}
  	}

  	json += closeBracket;
  	return json;
  }

  if (typeof obj === "object") {
  	var openBracket = '' + '{';
  	var closeBracket = '' + '}';
  	var comma = ',';
  	json = openBracket ;

  	for (var key in obj) {

  		if ( (key === "function") || (key === "undefined") || (key === "functions") ){
  			json += " ";
  			break;
  		}

  		json += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + comma;
  	}

  	if (obj.hasOwnProperty(key) === true) {
	  	// remove last comma
	  	json = json.slice(0, -1);
  	}

  	json += closeBracket;

  	return json;
  }
};
