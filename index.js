// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function(){
    cats.length=0;
    cats.push("Milo" , "Otis" ,"Garfield");
})
function destructivelyAppendCat(name){
    return(cats.push(name));
}

function destructivelyPrependCat(Bob) {
    return (cats.unshift(Bob));
}
function  destructivelyRemoveLastCat(name){
    return(cats.pop(name));
}
function  destructivelyRemoveFirstCat(name){
    return(cats.shift(name));
}

function appendCat(name){
    return[...cats,name]
}


function prependCat(name){
    return[name,...cats];
}
function removeLastCat(){
    return cats.slice(0, cats.length-1);
}
function removeFirstCat(){
    return cats.slice(1);
}
    

