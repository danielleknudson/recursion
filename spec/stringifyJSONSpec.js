// test cases are described in fixtures.js
describe('stringifyJSON', function(){
  it('should match the result of calling JSON.stringify', function(){


    stringifiableObjects.forEach(function(test){
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    // check for type: 
    // number
    // string
    // object -- includes null
    // boolean

   
    function stringifyJSON(item){

      console.log("The value being stringified is: " + item);

      if (typeof item === "number") {
        return '' + item + '';
      } else if (typeof item === "string") {
        return '"' + item + '"'
      } else if (typeof item === "boolean") {
        return '' + item + '';
      } else if (typeof item === "object") {

        if (item === null) { // check for null value which is of type object
          return "null";
        } else if (item.hasOwnProperty('length') === false) { // it's an object
          var string = "{";
          for (var key in item){
            if (!item.hasOwnProperty(key)){
              return '{}';
            } else {
              string = string + stringifyJSON(item.key);
            }  
          }
          string = string + "}"
          return string;
        } else { // it's an array
          if (item.length === 0){ //empty array 
            return "[" + "]";
          } else { // not an empty array
            console.log(item.length);
            var string = "[";
            while(item.length){
              string = string + stringifyJSON(item.shift());
              console.log(item.length);
              if (item.length !== 0) {
                string = string + ",";
              }
            }
            string = string + "]";
            return string;
          } 
        }
      }
    }
    
     
    


    unstringifiableValues.forEach(function(obj){
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });
});
