var hournow = prompt('what time is it? 0-23');
console.log('prompt question:', hournow);

var greeting;

if (hournow > 18 && hournow < 24){
    greeting = 'good evening, everyone!'
}

else if (hournow > 12 && hournow <24){
    greeting = 'good afternoon, everyone'
}

else if (hournow >= 0 && hournow < 24){
    greeting = 'good morning'
} else {
    greeting = 'wait you didnt give me a proper response'
}


console.log('our response:', greeting);

document.write(greeting);
document.write( ' i come after the hour from my greeting ' )
document.write( ' i come after the statement of i come after ' )