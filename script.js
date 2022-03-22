"use srtict";

const generateRandWord = function () {
  const wordsStorege = [
    "lackadaisical",
    "aloof",
    "elastic",
    "merciful",
    "sturdy",
    "rabbits",
    "green",
    "color",
    "therapeutic",
    "whirl",
    "petite",
    "few",
    "live",
    "subdued",
    "beef",
    "obedient",
    "square",
    "dock",
    "snow",
    "new",
  ];
  const randNum = (Math.random() * wordsStorege.length).toFixed(0);
  return wordsStorege[randNum];
};

const generateAsterix = function (arr) {
  const asterixArr = [];
  for (let i = 0; i < arr.length; i++) {
    asterixArr[i] = "*";
  }

  return asterixArr;
};

const isEntireWord = function (input) {
  const arr = input.toString().split("");
  return 1 !== arr.length;
};

const isWordComplete = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*") {
      return false;
    }
  }
  return true;
};

/* Receiving user input is in a separate function because I am not satisfied with the current input means and it will be replaced later */
const getUserInput = function (massege) {
  let userInput = prompt(massege);
  return userInput.toLowerCase();
};

/* to be updated later */
const displyIntro = function () {
  console.log(`Welcome to \n\n`);
  console.log(`
   /$$   /$$                                     /$$      /$$                                      
  | $$  | $$                                    | $$$    /$$$                                      
  | $$  | $$  /$$$$$$  /$$$$$$$   /$$$$$$       | $$$$  /$$$$  /$$$$$$  /$$$$$$$                   
  | $$$$$$$$ |____  $$| $$__  $$ /$$__  $$      | $$ $$/$$ $$ |____  $$| $$__  $$                  
  | $$__  $$  /$$$$$$$| $$  \ $$| $$  \ $$      | $$  $$$| $$  /$$$$$$$| $$  \ $$                  
  | $$  | $$ /$$__  $$| $$  | $$| $$  | $$      | $$\  $ | $$ /$$__  $$| $$  | $$                  
  | $$  | $$|  $$$$$$$| $$  | $$|  $$$$$$$      | $$ \/  | $$|  $$$$$$$| $$  | $$                  
  |__/  |__/ \_______/|__/  |__/ \____  $$      |__/     |__/ \_______/|__/  |__/                  
                                 /$$  \ $$                                                         
                                |  $$$$$$/                                                         
                                 \______/   `);
  console.log(`You have 10 attempts to guess the secret word chosen.
  You can try and guess one letter, or the whole word!`);
};

const hangMan = function () {
  const seacretWord = {
    wordArr: generateRandWord().split(""),
    asterixArr: "",
  };

  seacretWord.asterixArr = generateAsterix(seacretWord.wordArr);
  let strikeCounter = 10;
  displyIntro();

  while (strikeCounter > 0 && !isWordComplete(seacretWord.asterixArr)) {
    let guessIsSuccessful = false;
    console.log(`You have ${strikeCounter} gesses
The word is ${seacretWord.asterixArr.join("")}`);
    const userInput = getUserInput("What is your guesses?");

    /* ===== Entire Word Mode ===== */
    if (isEntireWord(userInput)) {
      if (userInput === seacretWord.wordArr.join("")) {
        guessIsSuccessful = true;
        seacretWord.asterixArr = seacretWord.wordArr;
      }
    } /* ===== Singel Char Mode =====*/ else {
      for (
        /* Varifing if the guess was successfule */
        let i = 0;
        i < seacretWord.wordArr.length;
        i++
      ) {
        if (userInput === seacretWord.wordArr[i]) {
          guessIsSuccessful = true;
          seacretWord.asterixArr[i] = userInput;
        }
      }
    }
    strikeCounter = guessIsSuccessful ? strikeCounter : strikeCounter - 1;
  }
  //Game end

  // Player wins
  if (isWordComplete(seacretWord.asterixArr)) {
    console.log(
      `You guessed the word right! The word was ${seacretWord.asterixArr.join(
        ""
      )}`
    );
  } else {
    console.log("Too bad, you are out of guesses");
  }
};

hangMan();
