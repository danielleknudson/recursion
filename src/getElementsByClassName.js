// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // you should use document.body, element.childNodes, and element.classList
  
  var elementsWithClassName = [];

  // create a function which traverses the document body
  var traverseDocument = function(node){
  	node = node || document.body;

  	// first check to see if node has className
  	if (node.classList.contains(className)) {
  		elementsWithClassName.push(node);
  	}

  	// now check to see if node has children,
  	// and if so, if they have the className
  	if (node.childNodes.length !== 0) {
  		var children = node.childNodes;
  		for (var i = 0; i < children.length; i++) {
  			if (children[i].nodeType === 1) {
  				traverseDocument(children[i]);
  			}
  		}
  	}   
  };

  traverseDocument();
  return elementsWithClassName;

};
