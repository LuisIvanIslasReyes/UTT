// // console.log("Hola mundo")

// // let x = 89
// // var y = 78

// // console.log(x-y)

// // y = "Foo Bar"

// // console.log(y)

// // var lol;

// // console.log(lol)

// array = [2, "Any type works", undefined, null, true, 2.51]

// // console.log(array[0] * array[5])

// obj = {
//      name: "Foo",
//      age: 23,
//      city: "TJ"
// }

// // console.log(obj["name"])

// // console.log(obj.city)

// // console.log(Object.values(obj))

// // for (let i=0; i<100; i+=5){
// //     console.log(i)
// // }

// // for (let index = 0; index < array.length; index++) {
// //     console.log(array[index])
// // }


// // for (let key of Object.keys(obj)){
// //      console.log(key + ": " + obj[key])
// // }


// // for (let key in obj){
// //     console.log(key + ": " + obj[key])
// // }

// // EJEMPLOS CON WHILE
// var i = 1000
// while (i < 1000){
//     console.log(i)
//     i+=5
// }


// var k = 1000
// do{
//     console.log(k)
//     k += 5
// } while(k<1000)

// var gatito = "cute"

// if(gatito === "cute"){
//     console.log("This kitty is pretty cute")
// } else{
 
//     console.log("This is a Ordinary kitty")
// }

// var ternary = (gatito === 'cute')? 'Kitty pretty ccute':'Kitty cute'
// console.log(ternary)

// switch(opc) {
//     case 1:
//         console.log("I am the case 1")
//         break;
//     case 2: 
//     console.log("I am the case 2")
//     break;
//     default:
//         console.log("I am de defaultt case")
//         break;
// }


// function areaTriangulo(b, h){
//     var area = b * h / 2
//     return area
// }

// console.log(areaTriangulo(10, 10));




//                                FUNCIONES                           //

// const foo = (function(){
//     console.log("I am the IIFE")
// }());

// var msg = "Hello world!"
// const bar = (function(msg){
//     console.log("Messsage: " + msg)
// }(msg));

// const joe = (function(){
//     return "Hello world! from joe"
// }());

// console.log(joe);


// const foo2 = function sum(x, y){
//     return x + y
// }
// console.log(foo2(56, 34));
/*console.log(sum(56, 34));
No se puede ya que la variable esta agarrando el valor de foo y no de la funcion sum.
*/


/*                                 RECURSIVIDAD EN FUNCIONES                                   */

// var say = function /*Sin este say agarra el cambio de variable del say = "Oops" pero al ponerlo
// aquí las referencias cambian e imprime como normal debería hacerlo*/say(times){
//     if (times > 0){
//         console.log("Hello");
//         say(times - 1)
//     }
// }

// var saysay = say
// say = "Oops!"
// saysay(5)



/*---------------------------------------------ARROW FUNCTIONS------------------------------------------*/

// Sin funcion arrow
// var foo = function(){
//     console.log("Hola mundo")
// }

// // Con función arrow
// var bar = (msg) => {console.log("Hola mundo!" + msg)}


// foo()

// bar(" Hello")




/*---------------------------------------------ARREGLOS EN FUNCIONES------------------------------------------*/

function persons(p, ...persons){
    persons.forEach(args => {
        console.log("P --"+ args + " Says:" +p)
    })
}

persons("Hola", "Foo", "Bar" , "Joe", "Islas", "Ernesto", "Brian", "Carlos")




/*---------------------------------------------FUNCIONES SIN PARÁMETRO-----------------------------------------*/
// function hello(msg = "Hello WOrld", person = "foo"){
//     console.log(msg + person);
// }

// hello();
/*---------------------------------------------FETCH API--------------------------------------------------------*/
