let readlineSync = require('readline-sync');

console.log(`   -------------------------------------------------------------------`);
console.log(`   🏆 Welcome to My Super Epic Champions Cup Penalty ⚽️ Shootout Game! 🏆`);
console.log(`   -------------------------------------------------------------------`);
console.log(`   Your team reached the finals of the Cup and it's all tied up!`);
console.log(`   You and the computer will alternate 5 turns shooting at the goal.`);
console.log(`   If still tied after five, you keep taking turns until someone wins.`);
console.log(`                                                                      `);
console.log(`   Do you have what it takes to repetitively enter some digits into a`);
console.log(`   command line and win it all? Probably!`)
console.log(`   Let's do this!`)
console.log(`   -------------------------------------------------------------------`);

let options = [`left`, `center`, `right`];

//let superstarOptions = [`top left`, `top right`, `top center`, `bottom left`, `bottom right`, `bottom center`]

let play = true;

let score = {
userScore: 0,
computerScore: 0
}

let totalAttempts = {
  user: 0,
  computer: 0
}

while(play) {

let choiceShotIndex =
  readlineSync
  .question(`Your turn to shoot! Choose shot direction. 1: left, 2: center, 3: right `);

while(!(choiceShotIndex > 0 && choiceShotIndex <=3)) {
  console.log(`This is awkward... that wasn't one of the choices. Try again.`);
  choiceShotIndex =
  readlineSync
  .question(`Your turn to shoot! Choose shot direction. 1: left, 2: center, 3: right `);
}

let userShotChoice = options[choiceShotIndex - 1];

let computerDefenseIndex = Math.random() * 3;

computerDefenseIndex = Math.floor(computerDefenseIndex);

let computerDefenseChoice = options[computerDefenseIndex];

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

if(!(computerDefenseChoice === userShotChoice)) {
  console.log(`   You fired a shot to the`, userShotChoice, `...`);
  sleep(4000);
  console.log(`   ⚽️ GOOOOOOOOOOOOOOOOOOOAL!!!`);
  console.log(`   The computer goalie dove to the`, computerDefenseChoice);
  totalAttempts.user++;
  score.userScore++;
  console.log(`Your Score: ${score.userScore} of ${totalAttempts.user}, Computer Score: ${score.computerScore} of ${totalAttempts.computer}`)
  console.log(`   -------------------------------------------------------------------`);
} else {
  console.log(`   You fired a shot to the`, userShotChoice, `...`);
  sleep(4000);
  console.log(`   ❌ SHOT BLOCKED!`);
  console.log(`   The computer goalie guessed ${computerDefenseChoice}. That bastard!`);
  totalAttempts.user++;
  console.log(`Your Score: ${score.userScore} of ${totalAttempts.user}, Computer Score: ${score.computerScore} of ${totalAttempts.computer}`)
  console.log(`   -------------------------------------------------------------------`);
}

function earlyEnd( score1, score2, attempts1, attempts2 ){
  if ((attempts1 <= 5) && (attempts2 <= 5) && (score1 - score2) > (5 - attempts2)) {
    console.log(`   🏆 YOU WIN! That was too easy. I'm pretty sure you cheated.`);
    play = false
  } else if ((attempts2 <= 5) && (attempts1 <= 5) && (score2 - score1) > (5 - attempts1)) {
    console.log(`   YOU LOST already?! Wow.`);
    console.log(`   Statistically, it wasn't easy for you to have lost this badly.`);
    play = false
  } else {
    return play = true
  }
}


let choiceDefenseIndex =
  readlineSync
  .question(`It's time to defend! Choose defense direction. 1: left, 2: center, 3: right `);

while(!(choiceDefenseIndex > 0 && choiceDefenseIndex <=3)) {
    console.log(`This is awkward... that wasn't one of the choices. Try again.`);
    choiceDefenseIndex =
    readlineSync
    .question(`It's time to defend! Choose defense direction. 1: left, 2: center, 3: right `);
  }

let userDefenseChoice = options[choiceDefenseIndex - 1];

let computerShotIndex = Math.random() * 3;

computerShotIndex = Math.floor(computerShotIndex);

let computerShotChoice = options[computerShotIndex];

if(computerShotChoice === userDefenseChoice) {
  console.log(`   Your goalie dives to the`, userDefenseChoice, `...`);
  sleep(4000);
  console.log(`   ✋😏🤚 YOU BLOCKED THE SHOT!`);
  console.log(`   Computer player shot the ball to the`, computerShotChoice);
  totalAttempts.computer++;
  console.log(`Your Score: ${score.userScore} of ${totalAttempts.user}, Computer Score: ${score.computerScore} of ${totalAttempts.computer}`)
  console.log(`   -------------------------------------------------------------------`);
} else {
  console.log(`   Your goalie defends`, userDefenseChoice, `...`);
  sleep(4000);
  console.log(`   😡 That's a COMPUTER GOAL! Womp womp.`);
  console.log(`   The computer player blasted it past you to the`, computerShotChoice);
  score.computerScore++;
  totalAttempts.computer++;
  console.log(`Your Score: ${score.userScore} of ${totalAttempts.user}, Computer Score: ${score.computerScore} of ${totalAttempts.computer}`)
  console.log(`   -------------------------------------------------------------------`);
}


// if ((totalAttempts.user <= 5) && (totalAttempts.computer < 5) && (score.userScore - score.computerScore) > (5 - totalAttempts.computer)){
//   console.log(`   🏆 YOU WIN! That was too easy. I'm pretty sure you cheated.`);
//   play = false
// } else if((totalAttempts.computer <= 5) && (totalAttempts.user < 5) && (score.computerScore - score.userScore) > (5 - totalAttempts.user)){
//   console.log(`   Wow. Statistically, it was actually unlikely for you to have lost this badly.`);
//   play =false
// }

earlyEnd( score.userScore, score.computerScore, totalAttempts.user, totalAttempts.computer);

if((totalAttempts.computer === 5) && (totalAttempts.user === 5) && (score.computerScore > score.userScore)){
  console.log(`   -------------------------------------------------------------------`);
  console.log(`   Ouch! YOU LOSE! You really let your people down. Nerds, that is.`);
  play = false
} else if((totalAttempts.computer === 5) && (totalAttempts.user === 5) && (score.computerScore < score.userScore)){
  console.log(`   -------------------------------------------------------------------`);
  console.log(`   🏆 YOU WIN!! You inspire children everywhere. It's kinda weird.`);
  play = false
} else if((totalAttempts.computer === 5) && (totalAttempts.user === 5) && (score.computerScore === score.userScore)){
  console.log(`   All tied up after five! Isn't this exciting? Keep shooting!`)
  play = true
} else if((totalAttempts.computer > 5) && (totalAttempts.user > 5) && (totalAttempts.computer === totalAttempts.user) && (score.userScore > score.computerScore)) {
  console.log(`   -------------------------------------------------------------------`);
  console.log(`   YOU WIN !! That was almost suspenseful!`);
  console.log(`   Here's a trophy emoji! 🏆 What did you want, a parade?`);
  play = false
} else if((totalAttempts.computer > 5) && (totalAttempts.user > 5) && (totalAttempts.computer === totalAttempts.user) && (score.userScore < score.computerScore)) {
  console.log(`   -------------------------------------------------------------------`);
  console.log(`   So close, but YOU LOSE! You're still a winner on the inside I guess?`);
  play = false
} else if((totalAttempts.computer === 7) && (totalAttempts.user === 7) && (totalAttempts.computer === totalAttempts.user) && (score.userScore === score.computerScore)) {
  console.log(`   Still tied!? Wake me up when it's over!`);
  play = true
} else if((totalAttempts.computer === 9) && (totalAttempts.user === 9) && (totalAttempts.computer === totalAttempts.user) && (score.userScore === score.computerScore)) {
  console.log(`   Okay, this is getting ridiculous.`);
  play = true
}

}

console.log(`      THANKS FOR PLAYING!`)
