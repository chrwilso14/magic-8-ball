//user name starts as blank so that it can be filled in by the user
let userName = '';

//if there is a username, the console will day "Hello, username" - if not, just "Hello"
userName ? console.log(`Hey, ${userName}!`) : console.log('Hello!');

//user question starts as blank so that it can be filled in by the user
let userQuestion = '';

//if userQuestion and UserName exsists, than console log "username, you asked userquestion"
//otherwise, console log 'nothing was asked.'
userQuestion && userName ? 
     console.log(`${userName}, you asked: ${userQuestion}`) 
     : console.log('no userQuestion or userName entered.');

//if userQuestion exsists, than console log "you asked userquestion"
//otherwise, console log 'nothing was asked.'
userQuestion ? console.log(`You asked: ${userQuestion}`)
: console.log('No userQuestion was asked.');


//if userName exsists, than console log "userName, you asked nothing"
//otherwise, console log 'nothing was asked.'
userName ? console.log(`${userName}, you asked nothing.`)
: console.log('no UserName was entered.');




function shake(){
    let ball = document.getElementById("ball");
    let messageText = document.getElementById("message");

    //if message box exsists, this will get rid of the previous message
    if(messageText != null){
        messageText.parentNode.removeChild(messageText)
    };
    //this will add a classList of shake when there is a click
    ball.classList.add("shake");

   //this sets a timeout to stop the shaking and remove the classlist after a second
    setTimeout(function(){ball.classList.remove("shake");}, 1000);

    //this sets a timeout on the fortune after a second
    setTimeout(function(){getFortune();}, 1000);

}

function getFortune(){

    //declaring randomNumber variable with Math floor to return the largest integer less than or equal to a given number (no decimals)
    const randomNumber = Math.floor((Math.random() * 10));

    // declaring eightball variable to start out as empty since it will be assigned at random using the switch statement and randomNumber
    let eightBall = '';

    switch(randomNumber){
        case 0:
            eightBall = 'It is certain.';
            console.log(`The mystical eightball answers: ${eightBall} `);
            break;

        case 1:
            eightBall = 'Cannot predict now.';
            console.log(`The mystical eightball answers: ${eightBall} `);
            break;

        case 3: 
            eightBall = 'It is decidedly so.';
            console.log(`The mystical eightball answers: ${eightBall} `);
            break;

        case 4: 
            eightBall = 'Reply hazy. Try again later.';
            console.log(`The mystical eightball answers: ${eightBall}`);
            break;

        case 5: 
            eightBall = 'Signs point to yes.';
            console.log(`The mystical eightball answers: ${eightBall}`);
            break;

        case 6: 
            eightBall = "Don't count on it.";
            console.log(`The mystical eightball answers: ${eightBall}`);
            break;

        case 7:
            eightBall = 'You know it!';
            console.log(`The mystical eightball answers: ${eightBall}`);
            break;

        case 8:
            eightBall = 'Outlook not so good';
            console.log(`The mystical eightball answers: ${eightBall}`);
            break;

        case 9: 
            eightBall = 'The answer is yes.';
            console.log(`The mystical eightball answers: ${eightBall}`);
            break;

        case 10:
            eightBall = "My sources say no.";
            console.log(`The mystical eightball answers: ${eightBall}`);
            break;
}

let fortune = document.getElementById("fortune");

//this is where we will display our new fortune (in a new div)
// let newMessage = document.createElement("div");

//this gives the newMessage div an id of "message"
// newMessage.setAttribute('id', "message");

fortune.innerHTML = eightBall;

fortune.append(eightBall);





    }
