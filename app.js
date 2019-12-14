var apparel = prompt(' Do you like apparel? yes or no ');
console.log('prompt question:', apparel);

var apparel;

if (apparel === 'yes'){
    greeting = 'Awesome, you came to the right place';
}
 else if ( apparel === 'no'){
     greeting = 'Go Away!!!';
 } else{
     greeting = 'That was an incorrect response'
 }

console.log('our response:', greeting);

 document.write(greeting);
