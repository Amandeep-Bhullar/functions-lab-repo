function writeOutputToDocument( result ) {
    document.getElementById(`output`).innerHTML += `<li>${result}</li>`;
  }
  
  // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
  function squareNumber(numToSquare){
    return numToSquare **2;
  }
  let numToSquare=3;
  let theSquareResult= squareNumber(numToSquare);
  writeOutputToDocument(`The result of squaring the number 3 is ${theSquareResult}`);
  console.log(`The result of squaring the number 3 is `+theSquareResult);
  // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
  function halfNumber(numToHalfNumber){
return numToHalfNumber;
  }
  let numToHalfNumber=5;
  let half=numToHalfNumber/2;
  writeOutputToDocument(`Half of ${numToHalfNumber} is ${half}`);
  console.log(`Half of `+numToHalfNumber+` is `+half);
  
  
  // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
  
  function percentOf(firstNumber, secondNumber){
    return firstNumber, secondNumber;
  }
  let firstNumber= 2;
  let secondNumber=4;
  let percent=(firstNumber /secondNumber)*100;
  writeOutputToDocument(`${firstNumber} is ${percent}% of ${secondNumber}`);
  console.log(firstNumber+` is `+percent+`% of `+secondNumber);
  // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  //      Bonus: Round the result so there are only two digits after the decimal.
  function areaOfCircle(theRadius){
    return theRadius;
  }
  let theRadius=2;
  let area=(theRadius**theRadius)*3.14;
  writeOutputToDocument(`The area for a circle with radius ${theRadius} is ${area}`);
  console.log(`The area for a circle with radius `+theRadius+` is ` +area);
  // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
  
  writeOutputToDocument(`Exercise 5 starts. it includes 4 querries`);
  console.log(`Exercise 5 starts. it includes 4 querries`);


  
//      1. Take half of the number and store the result.
  function performOperationUsingEalierFunction(numToHalfNumber){
 return numToHalfNumber;
 }
    let nHalf= numToHalfNumber/2;
   writeOutputToDocument(`Half of number  ${numToHalfNumber} is ${nHalf}`);
   
   console.log(`Half of number `+numToHalfNumber+` is `+nHalf);


  //      2. Square the result of #1 and store that result.
  let square= squareNumber(nHalf);
  writeOutputToDocument(`${square} square is the result of #1`);
  console.log(square+` square is the result of #1`);
  
  
  //      3. Calculate the area of a circle with the result of #2 as the radius. 
  let cRadius=square;
  let cArea=(cRadius**cRadius)*3.14;
   writeOutputToDocument(`Area of circle is ${cArea}`);
   console.log(`Area of circle is` +cArea);
  //      4. Calculate what percentage that area is of the squared result (#3).
  let percentageOfArea= (square/cArea)*100;
writeOutputToDocument(`This is squared result's ${percentageOfArea}% area`);
console.log(`This is squared result's ` +percentageOfArea+`% area`);