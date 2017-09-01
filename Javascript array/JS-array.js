var boys = ["Peter", "lars", "Ole"];
console.log(boys);
var girls = ["Janne", "hanne", "Sanne"];
console.log(girls);
var all  = boys.concat(girls);
all.push("Lone", "Gitte");
all.unshift("Hans", "Kurt");
console.log(all);
console.log(all.join(', '));
console.log(all.join('-'));
all.shift("Hans");
all.pop("Gitte");
console.log(all);
all.splice(3,2);
console.log(all);
all.reverse();
console.log(all);
all.sort();
console.log(all);
var upperAll = all.map(function(x){
return x.toUpperCase();
});
console.log(upperAll);
var notAll = all.filter(function(name){
    return name.charAt(0) ==('L'||'l');
  });
console.log(notAll);