var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var fnames = names.filter(function(name){
return name.length <=3;
});
names.forEach(function(names) {
return console.log(names);
});
fnames.forEach(function(fnames) {
return console.log(fnames);
});
var upperNames = names.map(function(x){
return x.toUpperCase();
});
console.log(upperNames);