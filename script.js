// Connects the button to the funtion displayMessage.
document.getElementById('button').addEventListener('click', displayMessage)

function displayMessage () {
  // Lets it so that if you click the button, the paragraph text will turn into the new paragraph text below.
  document.getElementById('paragraph').innerHTML = 'How to play: Enter a positive number in each input box. The goal is to get the two numbers to multiply to 500. If you dont get it right away, dont worry, you can try again! Tip: If you dont get 500 on your first attempt, either refresh the page or put in two new numbers to add onto the original product.'
}

// connects the button to the two input boxes.
document.getElementById('multiply').addEventListener('click', calculate)
let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0

function calculate () {
  firstNum = document.getElementById('first').value
  firstNum = parseInt(firstNum)
  secondNum = document.getElementById('second').value
  secondNum = parseInt(secondNum)

  // Makes it so the counter keeps looping until we get the correct product.
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  document.getElementById('answer').innerHTML = answer

  if (answer === 500) {
    document.getElementById('game').innerHTML = 'You did it congrats! Go back to main page to try another game.'
  } else {
    document.getElementById('game').innerHTML = 'Try again!'
  }
}
