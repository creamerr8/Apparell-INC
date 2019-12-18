function buildApp() {
    var apparel = prompt(' Do you like apparel? yes or no ');
console.log('prompt question:', apparel);



if (apparel === 'yes'){
    greeting = 'Awesome, you came to the right place';
}
 else if ( apparel === 'no'){
     greeting = 'Go Away!!!';
 } else{
     greeting = 'That was an incorrect response'
 }
 confirm('press a button');

console.log('our response:', greeting);

 document.write(greeting);

}

function add(a, b){
    var a = parseInt(prompt('pick a number'));
    var b = parseInt(prompt('pick another number')); 
    console.log(a + b);
}



buildApp(prompt);
add();