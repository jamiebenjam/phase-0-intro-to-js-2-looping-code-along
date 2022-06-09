// Code your solutions in this file
//writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function writeCards(name, adjective) {
    let greeting = []
    for (let i = 0; i < name.length; i++) {
        greeting.push(`Thank you, ${name[i]}, for the wonderful ${adjective} gift!`);
    } 
    return greeting;
}

function countDown(count) {
    while (count >= 0) {
        console.log(count);
        count--;
    };
}