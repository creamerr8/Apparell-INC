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
function apparelList(){
var apparelItems = ['shirts', 'pants', 'shoes', 'hats', 'belts'];

for (var i = 0; i < apparelItems.length; i++){
    document.write(apparelItems[i]); 
}
}

buildApp(prompt);
add();
apparelList();