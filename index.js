var kittens = ['Milo','Otis','Garfield']; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name){
var newaray = [...kittens,name];
return newaray;
}
function prependKitten(name){
  var newaray = [name,...kittens];
  return newaray;
}
function removeLastKitten(){
  var newaray = kittens.slice(0,kittens.length - 1);
  return newaray;
}
function removeFirstKitten(){
  var newaray = kittens.slice(1);
  return newaray;
}
