// // console.log('howdy');
var Name = prompt("Welcome traveler, what is your name?");

alert(`So ${Name}, we never get visitors around here, as a matter of fact you're the first one. I'll make you a deal, answer my questions and I'll tell you your fortune.`);

var Answer1 = prompt(`Do you accept this deal?`);

switch(Answer1) {
  case 'yes':
  alert(`Great let's get started!`);
  var favNumber = prompt(`What's your favourite number?`);

  var lastName = prompt(`What's your last name?`);

  alert(`Interesting...`);

  var age = prompt(`What is your age?`);

  alert(`So young!`);

  var house = prompt(`What is your house number?`);

  alert(`We use shapes to mark our houses here, ${house} is such a large number, there must be many houses where you're from!`);

  var birthday = prompt(`What day is your birthday?`);

  var arrayShape = ['triangle', 'square', 'pentagon'];
  var Shape = prompt(`Which of the following shapes do you prefer? ${arrayShape[0]}, ${arrayShape[1]} or ${arrayShape[2]}`);

  alert(`To be honest, I don't really like ${Shape}.`);

  var favColor = prompt(`What's your favourite color?`);

  alert (`${favColor} is such a nice color, I agree with your choice.`);

  var objTraveler = {
    name : 'Name',
    age : 'age',
  };

  var total= favNumber + age * house - birthday;

  var sum = total / objTraveler.age;

  alert(`I sense that you, will have ${total} days of good luck.`);

  var Answer2 = prompt(`Would you like to cash out your lucky days?`);

  if (Answer2 === 'yes')  {
    alert(`You now have £ ${total}, good luck.`);
  } else if (Answer2 === 'no') {
    alert(`enjoy your good fortune.`);
  }
  break;
  case 'no':
  alert(`That's a shame, next time then!`);
  console.log(false);
  break;
  default:
  console.log(false);
};



// stringsx
// alertsx
// promptsx
// integers/Floatsx
// Operators + - * / x
// Booleans
// Objects (bonus)
// Statements If/Else x
// Switchx
