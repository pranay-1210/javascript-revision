function onRockClick() {
    var computerChoice = Math.floor(Math.random() * 3) + 1;
var computerChoiceText;

if (computerChoice === 1) {
    computerChoiceText = 'Computer choose ✊ Rock.';
} else if (computerChoice === 2) {
    computerChoiceText = 'Computer choose 🤚 Paper.';
} else {
    computerChoiceText = 'Computer choose ✌ Scissors.';
}
var result;

if (computerChoiceText === `Computer choose ✊ Rock.`){
    result = 'Tie';
} else if (computerChoiceText === `Computer choose 🤚 Paper.`) {
    result = 'I Won';
} else {
    result = 'You Won';
}

document.querySelector('#result').innerHTML =
`You choose ✊ Rock.<br>
${computerChoiceText}<br>
The result is: ${result}`;
}

function onPaperClick() {
    var computerChoice = Math.floor(Math.random() * 3) + 1;
var computerChoiceText;

if (computerChoice === 1) {
    computerChoiceText = 'Computer choose ✊ Rock.';
} else if (computerChoice === 2) {
    computerChoiceText = 'Computer choose 🤚 Paper.';
} else {
    computerChoiceText = 'Computer choose ✌ Scissors.';
}
var result;

if (computerChoiceText === `Computer choose ✊ Rock.`){
    result = 'You Won';
} else if (computerChoiceText === `Computer choose 🤚 Paper.`) {
    result = 'Tie';
} else {
    result = 'I Won';
}

document.querySelector('#result').innerHTML =
`You choose 🤚 Paper.<br>
${computerChoiceText}
<br>
The result is: ${result}`;
}

function onScissorsClick() {
    var computerChoice = Math.floor(Math.random() * 3) + 1;
var computerChoiceText;

if (computerChoice === 1) {
    computerChoiceText = 'Computer choose ✊ Rock.';
} else if (computerChoice === 2) {
    computerChoiceText = 'Computer choose 🤚 Paper.';
} else {
    computerChoiceText = 'Computer choose ✌ Scissors.';
}
var result;

if (computerChoiceText === `Computer choose ✊ Rock.`){
    result = 'I Won';
} else if (computerChoiceText === `Computer choose 🤚 Paper.`) {
    result = 'You Won';
} else {
    result = 'Tie';
}

document.querySelector('#result').innerHTML =
`You choose ✌ Scissors.<br>
${computerChoiceText}
<br>
The result is: ${result}`;
}
    
    