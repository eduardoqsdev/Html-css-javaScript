/* 
    *function() constructor
    *criar um novo objeto
    *this keyword
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const edu  =  new Person("edu")
const joao = new Person("joão")

console.log(edu.walk())
console.log(joao.walk())