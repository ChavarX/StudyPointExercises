
function add(n1, n2){
return n1 +n2;
}

var sub = function(n1,n2){
return n1 - n2
} 

var mul = function(n1,n2){
return n1 * n2
}

var div = function(n1,n2){
return n1 / n2
}

var cb = function(n1,n2, callback){
return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};
try {
    throw new Error('Whoops!');
  } catch (e) {
    console.log(cb(3,3,div));
  }
