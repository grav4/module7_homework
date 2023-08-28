const objectToCheck = {
    name:"Roman",
    age:"19"
}

function stringAndObject (str,obj){
        if((str in obj) ===true) return true
        else return false
}
console.log(stringAndObject('tall',objectToCheck));